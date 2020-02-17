from rolepermissions.roles import AbstractUserRole


class Director(AbstractUserRole):
    available_permissions = {
        'manage_category': True,
    }


class Admin(AbstractUserRole):
    available_permissions = {
        'manage_category': True,
    }


class Accountant(AbstractUserRole):
    available_permissions = {
        'manage_category': True,
    }


class Marketing(AbstractUserRole):
    available_permissions = {
        'manage_business_chart': True,
    }


class Technician(AbstractUserRole):
    available_permissions = {
        'manage_category': False,
    }
