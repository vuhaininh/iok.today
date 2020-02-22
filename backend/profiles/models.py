from django.db import models
from django.conf import settings


class IndividualProfile(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=30)
    address = models.CharField(max_length=255)
    position = models.CharField(max_length=50, default="Nhân Viên")
    liability = models.FloatField(default=0)
    liability_limit = models.FloatField(default=0)

    dob = models.DateField(max_length=10)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class StaffProfile(IndividualProfile):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='profile',
        on_delete=models.CASCADE,
    )


class CustomerProfile(IndividualProfile):
    pass
