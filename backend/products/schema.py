from products.models import Category, Product, Order
import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation
from django_filters import FilterSet, OrderingFilter

# from helpers.constants import PERMISSIONS
from btqn_utils.decorators import has_role_decorator


class CategoryFilter(FilterSet):
    class Meta:
        model = Category
        fields = ['code', 'name', 'created_at', 'updated_at']

    order_by = OrderingFilter(
        fields=(
            ('created_at', 'created_at'),
            ('updated_at', 'updated_at'),
            ('code', 'code')
        )
    )


class CategoryNode(DjangoObjectType):
    class Meta:
        model = Category
        interfaces = (relay.Node,)
        filter_fields = ['code']


class ProductNode(DjangoObjectType):
    class Meta:
        model = Product
        interfaces = (relay.Node,)
        filter_fields = ['code']


class CreateProductMutation(DjangoCreateMutation):
    class Meta:
        model = Product


class PatchProductMutation(DjangoPatchMutation):
    class Meta:
        model = Product


class CreateCategoryMutation(DjangoCreateMutation):

    class Meta:
        model = Category

    @classmethod
    @login_required
    @has_role_decorator(['accountant', 'admin', 'director'])
    def mutate(cls, root, info, input):
        return super().mutate(root, info, input)


class PatchCategoryMutation(DjangoPatchMutation):
    class Meta:
        model = Category


class OrderNode(DjangoObjectType):
    class Meta:
        model = Order
        interfaces = (relay.Node,)
        filter_fields = ['id']


class Query(graphene.ObjectType):
    product = relay.Node.Field(ProductNode)
    products = DjangoFilterConnectionField(ProductNode)

    @login_required
    def resolve_products(self, info, **kwargs):
        return Product.objects.all()

    category = relay.Node.Field(CategoryNode)
    categories = DjangoFilterConnectionField(CategoryNode)

    @login_required
    def resolve_categories(self, info, **kwargs):
        return Category.objects.all()

    order = relay.Node.Field(OrderNode)
    oders = DjangoFilterConnectionField(OrderNode)


class Mutation(graphene.AbstractType):
    create_product = CreateProductMutation.Field()
    patch_product = PatchProductMutation.Field()

    create_category = CreateCategoryMutation.Field()
    patch_category = PatchCategoryMutation.Field()
