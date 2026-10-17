from django.core import mail
from django.core.cache import cache
from django.test import TestCase, override_settings
from rest_framework.test import APIClient

from .models import FAQ, ContactInquiry, Service, SiteSettings, Testimonial

CONTACT_URL = "/api/contact/"
VALID_INQUIRY = {
    "name": "Test User",
    "phone": "9821440046",
    "service": "Sofa repair",
    "message": "Need a sofa repaired",
}


class BaseAPITest(TestCase):
    def setUp(self):
        cache.clear()  # reset throttle counters between tests
        self.client = APIClient()


class PublicContentTests(BaseAPITest):
    def test_inactive_services_hidden(self):
        Service.objects.create(title="Visible", description="x", is_active=True)
        Service.objects.create(title="Hidden", description="x", is_active=False)

        response = self.client.get("/api/services/")

        self.assertEqual(response.status_code, 200)
        titles = [s["title"] for s in response.data]
        self.assertEqual(titles, ["Visible"])

    def test_inactive_testimonials_and_faq_hidden(self):
        Testimonial.objects.create(name="A", message="Good", is_active=False)
        FAQ.objects.create(question="Q?", answer="A", is_active=False)

        self.assertEqual(len(self.client.get("/api/testimonials/").data), 0)
        self.assertEqual(len(self.client.get("/api/faq/").data), 0)

    def test_public_cannot_write_content(self):
        response = self.client.post(
            "/api/services/", {"title": "Hack", "description": "x"}
        )
        self.assertEqual(response.status_code, 405)


class SiteSettingsTests(BaseAPITest):
    def test_404_when_not_configured(self):
        self.assertEqual(self.client.get("/api/site-settings/").status_code, 404)

    def test_returns_settings(self):
        SiteSettings.objects.create()
        response = self.client.get("/api/site-settings/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["business_name"], "Prakash Sofa Makers")


@override_settings(INQUIRY_NOTIFY_EMAIL="owner@example.com")
class ContactTests(BaseAPITest):
    def post(self, data=None):
        return self.client.post(CONTACT_URL, data or VALID_INQUIRY, format="multipart")

    def test_valid_inquiry_saved(self):
        response = self.post()

        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactInquiry.objects.count(), 1)

    def test_missing_required_fields_rejected(self):
        response = self.post({"name": "No phone"})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(ContactInquiry.objects.count(), 0)

    def test_get_not_allowed(self):
        self.assertEqual(self.client.get(CONTACT_URL).status_code, 405)

    def test_throttled_after_five_requests(self):
        for _ in range(5):
            self.assertEqual(self.post().status_code, 201)

        self.assertEqual(self.post().status_code, 429)

    def test_email_sent_on_new_inquiry(self):
        self.post()

        self.assertEqual(len(mail.outbox), 1)
        self.assertIn("Test User", mail.outbox[0].subject)
        self.assertEqual(mail.outbox[0].to, ["owner@example.com"])

    @override_settings(INQUIRY_NOTIFY_EMAIL="")
    def test_no_email_when_not_configured(self):
        self.post()
        self.assertEqual(len(mail.outbox), 0)