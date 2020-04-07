import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { defaultError } from '../../../utils/ErrorMessages';
const mutation = graphql`
  mutation EditStaffDetailMutation(
    $id: ID!
    $input: PatchProductInput!
  ) {
    patchProduct(id: $id, input: $input) {
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
export default (id, input, callback) => {
  const variables = {
    id,
    input,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => callback(errors),
    onError: err => {
      callback(defaultError);
    },
  });
};
