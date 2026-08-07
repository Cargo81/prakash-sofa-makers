from django.db import models


class Service(models.Model):

    ICON_CHOICES = [
        ("Sofa", "Sofa"),
        ("Hammer", "Hammer"),
        ("Wrench", "Wrench"),
        ("Home", "Home"),
        ("Briefcase", "Briefcase"),
        ("Sparkles", "Sparkles"),
    ]

    title = models.CharField(max_length=200)

    description = models.TextField()

    icon = models.CharField(
        max_length=50,
        choices=ICON_CHOICES,
        default="Sofa"
    )

    image = models.ImageField(
        upload_to="services/",
        blank=True,
        null=True
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title


class BeforeAfter(models.Model):

    title = models.CharField(
        max_length=200
    )

    before_image = models.ImageField(
        upload_to="before_after/"
    )

    after_image = models.ImageField(
        upload_to="before_after/"
    )

    description = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title


class Gallery(models.Model):

    title = models.CharField(
        max_length=200,
        blank=True
    )

    image = models.ImageField(
        upload_to="gallery/"
    )

    description = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title or f"Gallery {self.id}"


class Testimonial(models.Model):

    name = models.CharField(
        max_length=100
    )

    message = models.TextField()

    rating = models.PositiveIntegerField(
        default=5
    )

    image = models.ImageField(
        upload_to="testimonials/",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class FAQ(models.Model):

    question = models.CharField(
        max_length=300
    )

    answer = models.TextField()

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.question


class ContactInquiry(models.Model):

    name = models.CharField(
        max_length=100
    )

    phone = models.CharField(
        max_length=20
    )

    email = models.EmailField(
        blank=True
    )

    service = models.CharField(
        max_length=200,
        blank=True
    )

    message = models.TextField()

    sofa_image = models.ImageField(
        upload_to="inquiries/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    is_contacted = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.name


class SiteSettings(models.Model):

    business_name = models.CharField(
        max_length=200,
        default="Prakash Sofa Makers"
    )

    phone = models.CharField(
        max_length=20,
        default="+91 98214 40046"
    )

    whatsapp = models.CharField(
        max_length=20,
        default="+91 98214 40046"
    )

    location = models.CharField(
        max_length=200,
        default="Mumbai, Maharashtra"
    )

    projects_completed = models.PositiveIntegerField(
        default=5000
    )

    years_experience = models.PositiveIntegerField(
        default=25
    )

    customer_rating = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        default=4.9
    )

    satisfaction = models.PositiveIntegerField(
        default=100
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.business_name