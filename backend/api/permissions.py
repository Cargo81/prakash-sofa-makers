from rest_framework.permissions import BasePermission


class IsAdminOrReadOnly(BasePermission):
    """
    Anyone can GET public content.
    Only authenticated staff/admin users can modify it.
    """

    def has_permission(self, request, view):
        if request.method in ["GET", "HEAD", "OPTIONS"]:
            return True

        return (
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
        )