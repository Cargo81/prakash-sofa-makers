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
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = Gallery
        fields = [
            "id",
            "title",
            "image",
            "image_url",
            "description",
            "created_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if obj.image:
            url = obj.image.url

            if request:
                return request.build_absolute_uri(url)

            return url

        return None


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
        
    def validate_sofa_image(self, img):
     if img and img.size > 5 * 1024 * 1024:
        raise serializers.ValidationError("Image must be under 5 MB.")
     return img

def validate_phone(self, value):
    digits = "".join(c for c in value if c.isdigit())
    if len(digits) < 10:
        raise serializers.ValidationError("Enter a valid phone number.")
    return value


class SiteSettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SiteSettings
        fields = "__all__"