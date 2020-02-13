from products.models import Category, Product, Order
import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation,\
    DjangoPatchMutation


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

    order = relay.Node.Field(OrderNode)
    oders = DjangoFilterConnectionField(OrderNode)


class Mutation(graphene.AbstractType):
    create_product = CreateProductMutation.Field()
    patch_product = PatchProductMutation.Field()
