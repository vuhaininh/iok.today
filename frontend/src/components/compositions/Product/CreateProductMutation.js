import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { AddEdgeToRoot } from '../../../utils/Relay';
import { defaultError } from '../../../utils/ErrorMessages';
const mutation = graphql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      product {
        id
        code
        name
        listedPrice
        attributes
        updatedAt
        category {
          id
          code
          name
        }
      }
    }
  }
`;
export default (input, callback) => {
  const { code, name, price, category, attributes } = input;
  const variables = {
    input: {
      code,
      name,
      listedPrice: price,
      category,
      attributes,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    updater: store => {
      const addEdge = {
        mutation: 'createProduct',
        node: 'product',
        dataSet: 'ProductList_products',
        edgeType: 'ProductNodeEdge',
        store,
      };
      AddEdgeToRoot(addEdge);
    },
    onCompleted: (response, errors) => {
      callback(errors);
    },
    onError: err => {
      callback(defaultError);
    },
  });
};
