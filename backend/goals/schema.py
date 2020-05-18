from goals.models import Goal
import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation


class GoalNode(DjangoObjectType):
    class Meta:
        model = Goal
        interfaces = (relay.Node,)
        filter_fields = ['updated_at']


class CreateGoalMutation(DjangoCreateMutation):
    class Meta:
        model = Goal

    @classmethod
    @login_required
    def mutate(cls, root, info, input):
        return super().mutate(root, info, input)


class Query(graphene.ObjectType):
    goals = DjangoFilterConnectionField(GoalNode)

    @login_required
    def resolve_goals(self, info, **kwargs):
        return Goal.objects.all()


class Mutation(graphene.AbstractType):
    create_goal = CreateGoalMutation.Field()
