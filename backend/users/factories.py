import factory
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from faker import Faker
fake = Faker()


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = get_user_model()

    email = factory.Faker('ascii_free_email')
    password = make_password('123456')
