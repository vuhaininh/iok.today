from functools import wraps
from django.core.exceptions import PermissionDenied
from rolepermissions.checkers import has_role
from rolepermissions.utils import user_is_authenticated


def has_role_decorator(roles):
    def request_decorator(func):
        @wraps(func)
        def wrapper(cls, root, info, *args, **kwargs):
            user = info.context.user
            if user_is_authenticated(user):
                for role in roles:
                    if has_role(user, role):
                        return func(cls, root, info, *args, **kwargs)
            raise PermissionDenied("You cannot perform this action using current role")
        return wrapper
    return request_decorator
