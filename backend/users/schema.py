from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation, DjangoPatchMutation, DjangoDeleteMutation
import graphene
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model, authenticate
from graphql_jwt.shortcuts import get_token,  create_refresh_token
from graphene_django.forms.mutation import DjangoModelFormMutation
from django.forms import ModelForm
from django.contrib.auth.models import Group
from graphql_jwt.decorators import login_required
from graphql_relay.node.node import from_global_id
from btqn_utils.validation import has_roles
from helpers.constants import FULL_ALLOWED_ROLES
from django.core.exceptions import PermissionDenied


class GroupNode(DjangoObjectType):
    class Meta:
        model = Group


class UserNode(DjangoObjectType):
    group = graphene.Field(GroupNode)

    class Meta:
        model = get_user_model()
        filter_fields = ['id', 'email']
        interfaces = (relay.Node,)


class LoginForm(ModelForm):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password')


class LogInMutation(DjangoModelFormMutation):
    token = graphene.String()
    user = graphene.Field(UserNode)
    refresh_token = graphene.String()

    class Meta:
        form_class = LoginForm

    @classmethod
    def mutate(cls, root, info, **input):
        user = authenticate(
            email=input['input']['email'], password=input['input']['password'])

        if user is None:
            # Please enter a correct email and password
            raise Exception('100')

        if not user.is_active:
            # It seems your account has been disabled
            raise Exception('101')
        return cls(user=user, token=get_token(user), refresh_token=create_refresh_token(user))


class LogOutMutation(graphene.Mutation):
    token = graphene.String()

    class Arguments:
        token = graphene.String()

    @classmethod
    def mutate(cls, root, info, token):

        return cls


class CreateUserMutation(DjangoCreateMutation):
    class Meta:
        model = get_user_model()
        required_firleds = ("email", "password")
        only_fields = ("email", "password")

    @classmethod
    def handle_password(cls, value, name, info):
        return make_password(value)


class DeleteUserMutation(DjangoDeleteMutation):
    class Meta:
        model = get_user_model()

    @classmethod
    @login_required
    def mutate(cls, root, info, id):
        if(has_roles(info.context.user, FULL_ALLOWED_ROLES)):
            return super().mutate(root, info, id)
        else:
            raise PermissionDenied("You cannot perform this action using current role")


class PatchUserMutation(DjangoPatchMutation):
    class Meta:
        model = get_user_model()
        only_fields = ("email", "password")

    @classmethod
    def handle_password(cls, value, name, info):
        return make_password(value)

    @classmethod
    @login_required
    def mutate(cls, root, info, id, input):
        user_id = info.context.user.id
        account_id = from_global_id(id)[1]
        if(user_id == account_id or has_roles(info.context.user, FULL_ALLOWED_ROLES)):
            return super().mutate(root, info, id, input)
        else:
            raise PermissionDenied("You cannot perform this action using current role")


class Query(graphene.ObjectType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)
    me = graphene.Field(UserNode)

    def resolve_me(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('Authentication credentials were not provided')
        return user


class Mutation(graphene.AbstractType):
    create_user = CreateUserMutation.Field()
    patch_user = PatchUserMutation.Field()
    delete_user = DeleteUserMutation.Field()
    login = LogInMutation.Field()
    logout = LogOutMutation.Field()
