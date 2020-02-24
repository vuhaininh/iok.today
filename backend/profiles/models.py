from django.db import models
from django.conf import settings
from faker import Faker
fake = Faker()


class Profile(models.Model):
    class Meta:
        abstract = True


class IndividualProfile(Profile):
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    mobile = models.CharField(max_length=30, null=True)
    address = models.CharField(max_length=255, null=True)
    position = models.CharField(max_length=50, default="Nhân Viên")
    dob = models.DateField(max_length=10, null=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class StaffProfile(IndividualProfile):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='profile',
        on_delete=models.CASCADE,
    )
    liability = models.FloatField(default=0, null=True)
    liability_limit = models.FloatField(default=0, null=True)


class CustomerProfile(IndividualProfile):
    pass


class BankAccount(models.Model):
    account_number = models.CharField(max_length=30)
    bank_name = models.CharField(max_length=50)
    branch = models.CharField(max_length=60)
    owner = models.CharField(max_length=50)
