import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';

const mutation = graphql`
  mutation LoginUserMutation($input: LogInMutationInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        groups {
          name
        }
      }
      refreshToken
    }
  }
`;

export default (email, password, callback) => {
  const variables = {
    input: { email, password },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.login != null) {
        callback(response, null);
      } else callback(null, errors[0].message);
    },
    onError: err => {
      console.error(err);
    },
  });
};
