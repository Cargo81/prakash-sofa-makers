from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.exceptions import NotFound

from .models import (
    Service,
    BeforeAfter,
    Gallery,
    Testimonial,
    FAQ,
    ContactInquiry,
    SiteSettings,
)

from .serializers import (
    ServiceSerializer,
    BeforeAfterSerializer,
    GallerySerializer,
    TestimonialSerializer,
    FAQSerializer,
    ContactInquirySerializer,
    SiteSettingsSerializer,
)


# =========================================================
# PUBLIC READ-ONLY APIs
# =========================================================

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]


class BeforeAfterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BeforeAfter.objects.all()
    serializer_class = BeforeAfterSerializer
    permission_classes = [AllowAny]


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]


class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer
    permission_classes = [AllowAny]


# =========================================================
# PUBLIC CONTACT FORM
# POST ONLY
# =========================================================

class ContactInquiryCreateView(CreateAPIView):
    serializer_class = ContactInquirySerializer
    permission_classes = [AllowAny]


# =========================================================
# PUBLIC SITE SETTINGS
# GET ONLY
# =========================================================

class SiteSettingsView(RetrieveAPIView):
    serializer_class = SiteSettingsSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        settings = SiteSettings.objects.first()

        if not settings:
            raise NotFound("Site settings not configured.")

        return settings