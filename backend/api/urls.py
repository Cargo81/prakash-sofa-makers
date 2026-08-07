from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    ServiceViewSet,
    BeforeAfterViewSet,
    GalleryViewSet,
    TestimonialViewSet,
    FAQViewSet,
    ContactInquiryCreateView,
    SiteSettingsView,
)


router = DefaultRouter()

router.register("services", ServiceViewSet, basename="services")
router.register("before-after", BeforeAfterViewSet, basename="before-after")
router.register("gallery", GalleryViewSet, basename="gallery")
router.register("testimonials", TestimonialViewSet, basename="testimonials")
router.register("faq", FAQViewSet, basename="faq")


urlpatterns = [

    path(
        "contact/",
        ContactInquiryCreateView.as_view(),
        name="contact-create",
    ),

    path(
        "site-settings/",
        SiteSettingsView.as_view(),
        name="site-settings",
    ),
]


urlpatterns += router.urls