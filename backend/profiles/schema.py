from profiles import models
import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation

from btqn_utils.decorators import has_role_decorator
from helpers.constants import FULL_ALLOWED_ROLES


class StaffProfileNode(DjangoObjectType):
    class Meta:
        model = models.StaffProfile
        interfaces = (relay.Node,)
        filter_fields = ['id']


class IndividualCustomerProfileNode(DjangoObjectType):
    class Meta:
        model = models.IndividualCustomerProfile
        interfaces = (relay.Node,)
        filter_fields = ['id']


class CompanyCustomerProfileNode(DjangoObjectType):
    class Meta:
        model = models.CompanyCustomerProfile
        interfaces = (relay.Node,)
        filter_fields = ['id']


class CustomerBankAccountNode(DjangoObjectType):
    class Meta:
        model = models.CustomerBankAccount
        interfaces = (relay.Node,)
        filter_fields = ['id']


class CreateCustomerBankAccountMutation(DjangoCreateMutation):

    class Meta:
        model = models.CustomerBankAccount

    @classmethod
    @login_required
    @has_role_decorator(FULL_ALLOWED_ROLES)
    def mutate(cls, root, info, input):
        return super().mutate(root, info, input)


class CreateStaffProfileMutation(DjangoCreateMutation):
    class Meta:
        model = models.StaffProfile

    @classmethod
    @login_required
    @has_role_decorator(FULL_ALLOWED_ROLES)
    def mutate(cls, root, info, input):
        return super().mutate(root, info, input)


class Query(graphene.ObjectType):
    staff_profile = relay.Node.Field(StaffProfileNode)
    staff_profiles = DjangoFilterConnectionField(StaffProfileNode)

    @login_required
    def resolve_staff_profiles(self, info, **kwargs):
        return models.StaffProfile.objects.all()

    individual_customer_profile = relay.Node.Field(IndividualCustomerProfileNode)
    individual_customer_profiles = DjangoFilterConnectionField(IndividualCustomerProfileNode)

    @login_required
    def resolve_individual_customer_profiles(self, info, **kwargs):
        return models.IndividualCustomerProfile.objects.all()

    company_customer_profile = relay.Node.Field(CompanyCustomerProfileNode)
    company_customer_profiles = DjangoFilterConnectionField(CompanyCustomerProfileNode)

    @login_required
    def resolve_company_customer_profiles(self, info, **kwargs):
        return models.CompanyCustomerProfile.objects.all()

    customer_bank_account = relay.Node.Field(CustomerBankAccountNode)
    customer_bank_accounts = DjangoFilterConnectionField(CustomerBankAccountNode)


class Mutation(graphene.AbstractType):
    create_customer_bank_account = CreateCustomerBankAccountMutation.Field()
    create_staff_profile = CreateStaffProfileMutation.Field()
