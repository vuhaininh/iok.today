from profiles import models
import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation

from btqn_utils.decorators import has_role_decorator


class StaffProfileNode(DjangoObjectType):
    class Meta:
        model = models.StaffProfile
        interfaces = (relay.Node,)
        filter_fields = ['id']


class Query(graphene.ObjectType):
    staff_profiles = DjangoFilterConnectionField(StaffProfileNode)

    @login_required
    def resolve_staff_profiles(self, info, **kwargs):
        return models.StaffProfile.objects.all()
