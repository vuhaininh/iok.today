import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { defaultError } from '../../../utils/ErrorMessages';
const mutation = graphql`
  mutation PatchPasswordMutation($id: ID!, $input: PatchUserInput!) {
    patchUser(id: $id, input: $input) {
      user {
        id
        email
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
