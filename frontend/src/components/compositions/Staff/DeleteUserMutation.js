import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { defaultError } from '../../../utils/ErrorMessages';

const mutation = graphql`
  mutation DeleteUserMutation($id: ID!) {
    deleteUser(id: $id) {
      found
      deletedId
    }
  }
`;
export default (id, callback) => {
  const variables = {
    id,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      callback(response, errors);
    },
    onError: err => {
      callback(null, defaultError);
    },
  });
};
