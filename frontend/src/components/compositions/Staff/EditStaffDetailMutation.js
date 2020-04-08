import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { defaultError } from '../../../utils/ErrorMessages';
const mutation = graphql`
  mutation EditStaffDetailMutation(
    $id: ID!
    $input: PatchStaffProfileInput!
  ) {
    patchStaffProfile(id: $id, input: $input) {
      staffProfile {
        id
        firstName
        lastName
        position
        dob
        mobile
        address
        liability
        liabilityLimit
        user {
          id
          email
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
