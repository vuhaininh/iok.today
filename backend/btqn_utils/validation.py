from django.core.exceptions import ValidationError
from contextlib import contextmanager
from rolepermissions.checkers import has_role


class ValidationErrorTestMixin(object):

    @contextmanager
    def assertValidationErrors(self, *args, **kwargs):
        """
        Assert that a validation error is raised, containing all the specified
        fields, and only the specified fields.
        """
        try:
            yield
            raise AssertionError("ValidationError not raised")
        except ValidationError as e:
            self.assertEqual(set(kwargs['fields']), set(e.message_dict.keys()))
            if "messages" in kwargs:
                self.assertEqual(kwargs['messages'], e.messages)


def has_roles(user, roles):
    has_roles = False
    for role in roles:
        if has_role(user, role):
            has_roles = True
    return has_roles
