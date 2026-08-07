from rest_framework import serializers

from .models import (
    Service,
    BeforeAfter,
    Gallery,
    Testimonial,
    FAQ,
    ContactInquiry,
    SiteSettings,
)


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = "__all__"


class BeforeAfterSerializer(serializers.ModelSerializer):

    class Meta:
        model = BeforeAfter
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Testimonial
        fields = "__all__"


class FAQSerializer(serializers.ModelSerializer):

    class Meta:
        model = FAQ
        fields = "__all__"


class ContactInquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactInquiry

        fields = [
            "name",
            "phone",
            "email",
            "service",
            "message",
            "sofa_image",
        ]


class SiteSettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SiteSettings
        fields = "__all__"