import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation

from btqn_utils.decorators import has_role_decorator
from customers import models


class CustomerNode(DjangoObjectType):
    class Meta:
        model = models.Customer
        interfaces = (relay.Node,)
        filter_fields = ['code']


class CustomerGroupNode(DjangoObjectType):
    class Meta:
        model = models.CustomerGroup
        interfaces = (relay.Node,)
        filter_fields = ['code']


class Query(graphene.ObjectType):
    customer = relay.Node.Field(CustomerNode)
    customers = DjangoFilterConnectionField(CustomerNode)

    @login_required
    def resolve_customers(self, info, **kwargs):
        return models.Customer.objects.all()

    customer_group = relay.Node.Field(CustomerGroupNode)
    customer_groups = DjangoFilterConnectionField(CustomerGroupNode)
