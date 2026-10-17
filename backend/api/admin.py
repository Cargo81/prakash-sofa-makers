from django.contrib import admin
from django.utils.html import format_html

from .models import (
    Service,
    BeforeAfter,
    Gallery,
    Testimonial,
    FAQ,
    ContactInquiry,
    SiteSettings,
)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "price", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("title", "description")
    list_editable = ("is_active",)


@admin.register(BeforeAfter)
class BeforeAfterAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")
    search_fields = ("title", "description")


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "created_at")
    search_fields = ("title", "description")


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "rating", "is_active", "created_at")
    list_filter = ("rating", "is_active")
    search_fields = ("name", "message")
    list_editable = ("is_active",)


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question", "is_active", "created_at")
    list_filter = ("is_active",)
    search_fields = ("question", "answer")
    list_editable = ("is_active",)


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "email",
        "service",
        "is_contacted",
        "created_at",
    )
    list_filter = ("is_contacted", "created_at")
    search_fields = ("name", "phone", "email", "service", "message")
    list_editable = ("is_contacted",)
    readonly_fields = ("created_at", "image_preview")

    @admin.display(description="Sofa photo")
    def image_preview(self, obj):
        if obj.sofa_image:
            return format_html(
                '<img src="{}" style="max-height:200px;border-radius:6px;" />',
                obj.sofa_image.url,
            )
        return "No image"


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = (
        "business_name",
        "phone",
        "projects_completed",
        "years_experience",
        "customer_rating",
        "satisfaction",
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False