import graphene
import graphql_jwt
from personal_okr.schema import Query as pok_Query
from personal_okr.schema import Mutation as pok_Mutation
from users.schema import Query as users_Query
from users.schema import Mutation as users_Mutation
from products.schema import Query as products_Query
from products.schema import Mutation as products_Mutation
from profiles.schema import Query as profiles_Query
from profiles.schema import Mutation as profiles_Mutation
from customers.schema import Query as customers_Query


class Query(pok_Query, users_Query, products_Query, profiles_Query, customers_Query, graphene.ObjectType):
    pass


class Mutation(pok_Mutation, users_Mutation, products_Mutation, profiles_Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    # Long running refresh tokens
    revoke_token = graphql_jwt.relay.Revoke.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
