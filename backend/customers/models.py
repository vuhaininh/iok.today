from django.db import models


class CustomerGroup(models.Model):
    code = models.CharField(max_length=50)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.code} {self.name}"


class Customer(models.Model):
    code = models.CharField(max_length=30)
    customer_group = models.ForeignKey(
        CustomerGroup,
        related_name='customer',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.code
