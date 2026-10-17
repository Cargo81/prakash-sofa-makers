import logging

from django.conf import settings
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import ContactInquiry

logger = logging.getLogger(__name__)


@receiver(post_save, sender=ContactInquiry)
def notify_new_inquiry(sender, instance, created, **kwargs):
    if not created or not settings.INQUIRY_NOTIFY_EMAIL:
        return

    body = (
        f"Name: {instance.name}\n"
        f"Phone: {instance.phone}\n"
        f"Email: {instance.email or '-'}\n"
        f"Service: {instance.service or '-'}\n\n"
        f"Message:\n{instance.message}\n"
    )

    try:
        send_mail(
            subject=f"New inquiry from {instance.name}",
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.INQUIRY_NOTIFY_EMAIL],
        )
    except Exception:
        # A mail failure must never make the customer's form submission fail
        logger.exception("Could not send inquiry notification")