import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { ConnectionHandler } from 'relay-runtime';
import { AddEdgeToRoot } from '../../../utils/Relay';
const mutation = graphql`
  mutation CreateCategoryMutation($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      category {
        id
        name
        code
      }
    }
  }
`;
export default (input, callback) => {
  const { code, name } = input;
  const variables = {
    input: {
      code,
      name,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    updater: store => {
      const addEdge = {
        mutation: 'createCategory',
        node: 'category',
        dataSet: 'CategoryList_categories',
        edgeType: 'CategoryNodeEdge',
        store,
      };
      AddEdgeToRoot(addEdge);
    },
    onComplete: () => {
      callback();
    },
    onError: err => console.error(err),
  });
};
