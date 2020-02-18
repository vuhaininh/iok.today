from django.test import TestCase

from users import models
from btqn_utils.validation import ValidationErrorTestMixin


class InvalidUserTests(ValidationErrorTestMixin, TestCase):
    def _invalid_email(self, email):
        user = models.User(email=email, password="123456",
                           first_name="haha", last_name="hihihi")
        with self.assertValidationErrors(self, fields=['email'],
                                         messages=['Enter a valid email address.']):
            user.save()
            self.assertEqual(user.id, None)
    """Enter blank Email address  """

    def test_blank_email(self):
        user = models.User(password="123456",
                           first_name="haha", last_name="hihihi")
        with self.assertValidationErrors(self, fields=['email'],
                                         messages=['This field cannot be blank.']):
            user.save()
            self.assertEqual(user.id, None)

    """Enter Invalid User Email address  """

    def test_invalid_user_emails(self):
        emails = {"gmail.com", "@gmail.com", "gmail@.com", "#@%^%#$@#$@#.com",
                  "Joe Smith <email@domain.com>",
                  "email.domain.com", "email@domain@domain.com",
                  "email.@domain.com", "email..email@domain.com",
                  "あいうえお@domain.com", "email@domain.com (Joe Smith)",
                  "email@domain", "email@-domain.com", "email@domain..com"}
        for email in emails:
            self._invalid_email(email)

    """ Enter Blank Password"""

    def test_blank_password(self):
        user = models.User(email="goodgame@gmail.com",
                           password="", first_name="haha", last_name="hihihi")
        with self.assertValidationErrors(self, fields=['password'],
                                         messages=['This field cannot be blank.']):
            user.save()

    """ Enter Blank First Name"""

    def test_blank_first_name(self):
        user = models.User(email="goodgame@gmail.com",
                           password="1423423", first_name="",
                           last_name="hihihi")
        with self.assertValidationErrors(self, fields=['first_name'],
                                         messages=['This field cannot be blank.']):
            user.save()

    """ Enter Blank Last Name"""

    def test_blank_last_name(self):
        user = models.User(email="goodgame@gmail.com",
                           password="23423234", first_name="haha", last_name="")
        with self.assertValidationErrors(self, fields=['last_name'],
                                         messages=['This field cannot be blank.']):
            user.save()
