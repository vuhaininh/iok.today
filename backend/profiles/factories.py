import factory
from .models import StaffProfile, IndividualProfile


class IndividualProfileFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = IndividualProfile
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    mobile = factory.Faker('phone_number')
    address = factory.Faker('address')
    position = factory.Faker('job')
    liability = factory.Faker('pyint', min_value=5000000, max_value=15000000, step=300000)
    liability_limit = factory.Faker('pyint', min_value=20000000, max_value=55000000, step=300000)
    dob = factory.Faker('date_between',
                        start_date="-35y", end_date="-25y")


class StaffProfileFactory(IndividualProfileFactory):
    class Meta:
        model = StaffProfile
