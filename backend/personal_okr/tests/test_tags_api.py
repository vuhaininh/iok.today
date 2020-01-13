import json
from graphene_django.utils.testing import GraphQLTestCase
from btqn.schema import schema
from helpers.load_sample_data import load_all_data, load_user_data, load_tag_data


class PublicTagApiTestCase(GraphQLTestCase):
    """Test the publicly avaiable tags API"""
    GRAPHQL_SCHEMA = schema

    def test_login_required_to_get_tags(self):
        pass


class PrivateTagApiTestCase(GraphQLTestCase):
    # Here you need to inject your test case's schema
    """Test the authorized user tags api """
    GRAPHQL_SCHEMA = schema

    """Get all tags successful"""

    def test_get_all_tags(self):
        load_user_data()
        load_tag_data()
        response = self.query(
            '''
            query{
                tags{
                    edges{
                        node{
                            id
                            name
                        }
                    }
                }
            }
            '''
        )
        content = json.loads(response.content)
        # This validates the status code and if you get errors
        self.assertResponseNoErrors(response)
