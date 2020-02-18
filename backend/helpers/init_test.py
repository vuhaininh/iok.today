from django.contrib.auth import get_user_model
from rolepermissions.roles import assign_role
from faker import Faker
fake = Faker()


def create_user(email, password, first_name, last_name, role):
    User = get_user_model()
    user = User.objects.create_user(email, password, first_name=first_name, last_name=last_name)
    assign_role(user, role)
    return user


def init_user():
    create_user('test@gmail.com', 'Invalid2020#', 'John', 'Dev', 'accountant')


def sample_user():
    return create_user('test@dev.com', 'Invalid2020#', 'Jon', 'Dev', 'accountant')


def sample_user_role(role):
    return create_user(fake.ascii_free_email(), 'Invalid2020#', 'Jon', 'Dev', role)
