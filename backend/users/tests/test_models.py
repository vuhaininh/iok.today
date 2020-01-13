from django.test import TestCase
from django.core.exceptions import ValidationError
from users import models
from btqn_utils.validation import ValidationErrorTestMixin
from django.core.exceptions import NON_FIELD_ERRORS

import unittest
class ModelTests(TestCase):
    def test_role_str(self):
        """Test the role string representation"""
        role = models.Role(code="BGD",name="Ban giám đốc",description='Quản lý',permission='manage_all')
        self.assertEqual(str(role),f'{role.code} {role.name}')
        


class InvalidUserTests(ValidationErrorTestMixin,TestCase):
    def _invalid_email(self,email):
        user= models.User(email=email,password="123456",first_name="haha",last_name="hihihi")
        with self.assertValidationErrors(self,fields=['email'], messages=['Enter a valid email address.']):
            user.save()  
    """Enter blank Email address  """
    def test_blank_email(self):
        user= models.User(password="123456",first_name="haha",last_name="hihihi")
        with self.assertValidationErrors(self,fields=['email'], messages=['This field cannot be blank.']):
            user.save()
    
    """Enter Invalid User Email address  """  
    def test_invalid_user_emails(self):    
        self._invalid_email("gmail.com")
        self._invalid_email("@gmail.com")
        self._invalid_email("gmail@.com")
        self._invalid_email("#@%^%#$@#$@#.com")
        self._invalid_email("Joe Smith <email@domain.com>")
        self._invalid_email("email.domain.com")
        self._invalid_email("email@domain@domain.com")
        self._invalid_email("email.@domain.com")
        self._invalid_email("email..email@domain.com")
        self._invalid_email("あいうえお@domain.com")
        self._invalid_email("email@domain.com (Joe Smith)")
        self._invalid_email("email@domain")
        self._invalid_email("email@-domain.com")
        self._invalid_email("email@domain..com")
        
    """ Enter Blank Password"""
    def test_blank_password(self):
        user= models.User(email="goodgame@gmail.com",password="",first_name="haha",last_name="hihihi")
        with self.assertValidationErrors(self,fields=['password'], messages=['This field cannot be blank.']):
            user.save()  

    """ Enter Blank First Name"""
    def test_blank_first_name(self):
        user= models.User(email="goodgame@gmail.com",password="1423423",first_name="",last_name="hihihi")
        with self.assertValidationErrors(self,fields=['first_name'], messages=['This field cannot be blank.']):
            user.save()              

    """ Enter Blank Last Name"""
    def test_blank_last_name(self):
        user= models.User(email="goodgame@gmail.com",password="23423234",first_name="haha",last_name="")
        with self.assertValidationErrors(self,fields=['last_name'], messages=['This field cannot be blank.']):
            user.save()    