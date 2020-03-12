import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';

const mutation = graphql`
  mutation CreateInitUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        email
      }
    }
  }
`;
export default (form, callback) => {
  const { email, password } = form;
  const variables = {
    input: {
      email,
      password,
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
