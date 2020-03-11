from customers.models import Customer
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


class IndividualCustomerProfile(IndividualProfile):
    own = models.ForeignKey(
        Customer,
        related_name='individual_profile',
        on_delete=models.CASCADE,
    )
    email = models.CharField(max_length=100, null=True)
    liability = models.FloatField(default=0, null=True)
    liability_limit = models.FloatField(default=0, null=True)


class OrganizationProfile(Profile):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    tax_code = models.CharField(max_length=30)

    class Meta:
        abstract = True


class CompanyCustomerProfile(OrganizationProfile):
    own = models.ForeignKey(
        Customer,
        related_name='company_profile',
        on_delete=models.CASCADE,
    )
    liability = models.FloatField(default=0, null=True)
    liability_limit = models.FloatField(default=0, null=True)
    representatives = models.ManyToManyField(IndividualCustomerProfile)

    def __str__(self):
        return f"{self.name}"


class BankAccount(models.Model):
    account_number = models.CharField(max_length=30, unique=True)
    bank_name = models.CharField(max_length=50)
    branch = models.CharField(max_length=60)
    owner = models.CharField(max_length=50)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.account_number}"


class CustomerBankAccount(BankAccount):
    own = models.ForeignKey(
        Customer,
        related_name='bank_account',
        on_delete=models.CASCADE,
    )
