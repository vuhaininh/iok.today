from django.contrib import admin, auth
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
from users import models
from django.contrib.auth.models import Permission
from rolepermissions import roles
from django.contrib.auth.models import Group

UserModel = auth.get_user_model()


class RolePermissionsUserAdminMixin(object):
    pass


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email']
    fieldsets = (
        (None, {
            'fields': (
                'email',
                'password',
            ),
        }),

        (_('Roles'), {
            'fields': ('groups',)
        }),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser',)
        }),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    """ Must be mixed in with an UserAdmin class"""

    def save_related(self, request, form, formsets, change):
        user = UserModel.objects.get(pk=form.instance.pk)
        old_user_roles = set(r.get_name() for r in roles.get_user_roles(user))
        super(UserAdmin, self).save_related(request, form, formsets, change)

        new_user_groups = set(g.name for g in user.groups.all())

        for role_name in (old_user_roles - new_user_groups):  # roles removed from User's groups
            try:  # put the recently removed group back, let rolepermissions remove it...
                group = Group.objects.get(name=role_name)
                user.groups.add(group)
            except Group.DoesNotExist:
                pass
            roles.remove_role(user, role_name)

        for group_name in (new_user_groups - old_user_roles):
            # groups potentially added to User's roles
            try:
                roles.assign_role(user, group_name)
            except roles.RoleDoesNotExist:
                pass


admin.site.register(models.User, UserAdmin)

admin.site.register(Permission)
