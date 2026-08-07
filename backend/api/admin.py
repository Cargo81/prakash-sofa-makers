from django.contrib import admin
from .models import Service
from .models import BeforeAfter
from .models import Gallery
from .models import Testimonial
from .models import FAQ
from .models import ContactInquiry
from .models import SiteSettings


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "icon",
        "price",
        "is_active",
        "created_at",
    )

    list_filter = ("is_active",)

    search_fields = (
        "title",
        "description",
    )

@admin.register(BeforeAfter)
class BeforeAfterAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )
    
@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "title",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )
    
@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        # "location",
        "rating",
        "is_active",
        "created_at",
    )

    list_filter = (
        "rating",
        "is_active",
    )

    search_fields = (
        "name",
        "location",
        "message",
    )
    
@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):

    list_display = (
        "question",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "question",
        "answer",
    )
    
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

    list_filter = (
        "is_contacted",
        "created_at",
    )

    search_fields = (
        "name",
        "phone",
        "email",
        "service",
        "message",
    )
    
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