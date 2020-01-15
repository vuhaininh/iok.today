from django.core.exceptions import ValidationError
from contextlib import contextmanager


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
