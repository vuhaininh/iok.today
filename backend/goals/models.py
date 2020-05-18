from django.db import models
from django.conf import settings
# Create your models here.


class Goal(models.Model):
    """Goal of a Goal Board"""
    description = models.CharField(max_length=500)
    completed_on = models.DateField(default=None, null=True, blank=True)
    deadline = models.DateField(default=None, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='goals',
        on_delete=models.CASCADE
    )
    is_public = models.BooleanField(default=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.description
