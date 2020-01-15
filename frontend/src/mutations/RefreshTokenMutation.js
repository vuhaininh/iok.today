import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { getRefreshToken, setToken } from '../utils/LocalStorage';

const mutation = graphql`
  mutation RefreshTokenMutation($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
    }
  }
`;
export default callback => {
  const variables = {
    refreshToken: getRefreshToken(),
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.refreshToken != null) {
        const token = response.refreshToken.token;
        setToken(token);
        callback();
      }
    },
    onError: err => {
      console.error(err);
    },
  });
};
