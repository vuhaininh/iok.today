import json
from graphene_django.utils.testing import GraphQLTestCase
from btqn.schema import schema
from helpers.load_sample_data import load_categories_data
from graphql_jwt.shortcuts import get_token
from helpers.init_test import sample_user_role
from faker import Faker
fake = Faker()

CATEGORIES_QUERY = '''
            query {
                categories {
                    edges {
                    node {
                            code
                            name
                        }
                    }
                }
            }
            '''


class CategoryQueryTestCase(GraphQLTestCase):
    # Here you need to inject your test case's schema
    GRAPHQL_SCHEMA = schema

    def setUp(self):
        load_categories_data()

    def test_unauth_categories_query(self):
        response = self.query(
            CATEGORIES_QUERY
        )
        content = json.loads(response.content)
        error_message = content['errors'][0]['message']
        self.assertResponseHasErrors(response)
        self.assertEqual(error_message, 'You do not have permission to perform this action')

    def test_auth_categories_query(self):
        user = sample_user_role('accountant')
        token = get_token(user)

        response = self.query(
            CATEGORIES_QUERY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"}
        )
        content = json.loads(response.content)
        expected = {
            'data': {
                'categories': {
                    'edges': [
                        {
                            'node': {
                                'code': 'BTTP',
                                'name': 'Bê Tông Thương Phẩm'
                            }
                        },
                        {
                            'node': {
                                'code': 'BOM',
                                'name': 'Bơm'
                            }
                        }
                    ]
                }
            }
        }
        self.assertResponseNoErrors(response)
        self.assertEqual(content, expected)


CREATE_CATEGORY = '''
            mutation CreateCategoryMutation($input: CreateCategoryInput!) {
                createCategory(input: $input) {
                    category {
                        name
                    }
                }
            }
            '''


class CategoryMutationTestCase(GraphQLTestCase):
    # Here you need to inject your test case's schema
    GRAPHQL_SCHEMA = schema

    def test_unauth_create_category(self):
        response = self.query(
            CREATE_CATEGORY,
            op_name='CreateCategoryMutation',
            input_data={'code': 'TES', 'name': 'Test Category'}
        )
        content = json.loads(response.content)
        error_message = content['errors'][0]['message']
        self.assertResponseHasErrors(response)
        self.assertEqual(error_message, 'You do not have permission to perform this action')

    def _create_category_with_valid_role(self, role):
        user = sample_user_role(role)
        token = get_token(user)
        code = fake.word(ext_word_list=None)
        response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': code, 'name': 'Test Category'}
        )
        content = json.loads(response.content)
        expected = {
            "data": {
                "createCategory": {
                    "category": {
                        "name": "Test Category"
                    }
                }
            }
        }
        self.assertResponseNoErrors(response)
        self.assertEqual(content, expected)

    def test_auth_create_category_with_valid_roles(self):
        roles = ['accountant', 'admin', 'director']
        for role in roles:
            self._create_category_with_valid_role(role)

    def _create_category_with_invalid_role(self, role):
        user = sample_user_role(role)
        token = get_token(user)
        code = fake.word(ext_word_list=None)
        response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': code, 'name': 'Test Category'}
        )
        content = json.loads(response.content)
        error_message = content['errors'][0]['message']
        self.assertResponseHasErrors(response)
        self.assertEqual(error_message, "You cannot perform this action using current role")

    def test_auth_create_category_with_invalid_roles(self):
        roles = ['technician', 'marketing']
        for role in roles:
            self._create_category_with_invalid_role(role)

    def test_auth_create_duplicate_categories(self):
        user = sample_user_role('admin')
        token = get_token(user)
        first_response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': 'TES', 'name': 'Test Category'}
        )
        second_response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': 'TES', 'name': 'Test Category'}
        )
        self.assertResponseNoErrors(first_response)
        self.assertResponseHasErrors(second_response)
        content = json.loads(second_response.content)
        error_message = content['errors'][0]['message']
        self.assertTrue("already exist" in error_message)

    def test_auth_create_blank_code_category(self):
        user = sample_user_role('admin')
        token = get_token(user)
        response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': '', 'name': 'Test Category'}
        )
        self.assertResponseHasErrors(response)
        content = json.loads(response.content)
        error_message = content['errors'][0]['message']
        self.assertTrue("cannot be blank" in error_message)

    def test_auth_create_blank_name_category(self):
        user = sample_user_role('admin')
        token = get_token(user)
        response = self.query(
            CREATE_CATEGORY,
            headers={'HTTP_AUTHORIZATION': f"JWT {token}"},
            op_name='CreateCategoryMutation',
            input_data={'code': 'TET', 'name': ''}
        )
        self.assertResponseHasErrors(response)
        content = json.loads(response.content)
        error_message = content['errors'][0]['message']
        self.assertTrue("cannot be blank" in error_message)
