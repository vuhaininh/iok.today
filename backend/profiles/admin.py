from django.contrib import admin
from profiles import models
# Register your models here.
admin.site.register(models.StaffProfile)
admin.site.register(models.IndividualCustomerProfile)
admin.site.register(models.CompanyCustomerProfile)
admin.site.register(models.CustomerBankAccount)
