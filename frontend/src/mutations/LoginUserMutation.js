import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation LoginUserMutation($input: LogInMutationInput!) {
    login(input: $input) {
      token
      user {
        id
        email
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
        const id = response.login.user.id;
        const token = response.login.token;
        const refreshToken = response.login.refreshToken;

        callback(id, token, refreshToken, null);
      } else callback(null, null, null, errors[0].message);
    },
    onError: err => {
      console.error(err);
    },
  });
};
