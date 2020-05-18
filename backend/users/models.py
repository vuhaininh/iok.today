from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    PermissionsMixin
from django.db import models
from django.core.exceptions import ValidationError


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Create and save new user"""
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """Create and save new super user"""
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'email'

    def save(self, *args, **kwargs):
        try:
            self.email = self.email.lower()
            print(self.email)
            self.full_clean()
            super(User, self).save(*args, **kwargs)  # Call the "real" save() method.
        except ValidationError as e:
            raise e


class RelationShipType(models.Model):
    type = models.CharField(max_length=30)


class UserRelationShip(models.Model):
    relating_user_id = models.ForeignKey(
        User, related_name='relating_user', on_delete=models.CASCADE)
    related_user_id = models.ForeignKey(
        User, related_name='related_user', on_delete=models.CASCADE)
    relationship_type = models.ForeignKey(
        RelationShipType, related_name='relationship_type', on_delete=models.CASCADE)
