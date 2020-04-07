import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { getDate } from '../../../utils/Formatter';
import { defaultError } from '../../../utils/ErrorMessages';
import { AddEdgeToRoot } from '../../../utils/Relay';

const mutation = graphql`
  mutation CreateStaffProfileMutation(
    $input: CreateStaffProfileInput!
  ) {
    createStaffProfile(input: $input) {
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
    updater: store => {
      const addEdge = {
        mutation: 'createStaffProfile',
        node: 'staffProfile',
        dataSet: 'StaffList_staffProfiles',
        edgeType: 'StaffProfileNodeEdge',
        store,
      };
      AddEdgeToRoot(addEdge);
    },
    onCompleted: (response, errors) => {
      callback(response, errors);
    },
    onError: err => {
      callback(null, defaultError);
    },
  });
};
