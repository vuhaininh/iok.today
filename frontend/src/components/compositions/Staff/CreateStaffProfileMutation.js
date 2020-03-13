import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { getDate } from '../../../utils/Formatter';
const mutation = graphql`
  mutation CreateStaffProfileMutation(
    $input: CreateStaffProfileInput!
  ) {
    createStaffProfile(input: $input) {
      staffProfile {
        id
        user {
          email
        }
      }
    }
  }
`;
export default (form, callback) => {
  const {
    firstName,
    lastName,
    mobile,
    address,
    position,
    dob,
    liability,
    liabilityLimit,
    user,
  } = form;
  const variables = {
    input: {
      firstName,
      lastName,
      mobile,
      address,
      position,
      dob: getDate(dob),
      liability,
      liabilityLimit,
      user,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      callback(response, errors);
    },
    onError: err => {
      console.error(err);
    },
  });
};
