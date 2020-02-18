from django.db import models
from django.core.exceptions import ValidationError


class Category(models.Model):
    """Tag to be used for a objective"""
    class Meta:
        verbose_name_plural = "categories"
    code = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        try:
            self.full_clean()
            super(Category, self).save(*args, **kwargs)  # Call the "real" save() method.
        except ValidationError as e:
            raise e


class Product(models.Model):
    """Tag to be used for a objective"""
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    code = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    listed_price = models.FloatField(default=0)
    attributes = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    product = models.ForeignKey(Product, related_name='orders', on_delete=models.CASCADE)
