import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { getRefreshToken } from '../../../utils';
const mutation = graphql`
  mutation RevokeTokenMutation($refreshToken: String!) {
    revokeToken(input: { refreshToken: $refreshToken }) {
      revoked
    }
  }
`;

export default () => {
  const variables = {
    refreshToken: getRefreshToken(),
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {},
    onError: err => {},
  });
};
