// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

import {
  getToken,
  getRefreshToken,
  setToken,
  signOut,
} from './utils';

// 2
const store = new Store(new RecordSource());
const refreshTokenQuery = `mutation RefreshTokenMutation($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    token
  }
}`;
const getHeader = token => {
  const header =
    token == null
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`,
        };
  return header;
};

const getOptions = (header, operationText, variables) => {
  return {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      query: operationText,
      variables: variables,
    }),
  };
};

// 3
const network = Network.create((operation, variables) => {
  // 4

  async function getDataAsync() {
    const url = 'http://localhost:8000/graphql/';
    const options = getOptions(
      getHeader(getToken()),
      operation.text,
      variables,
    );
    let response = await fetch(url, options);
    let data = await response.json();

    if (data.errors) {
      if (data.errors[0].message == 'Signature has expired') {
        const refreshToken = {
          refreshToken: getRefreshToken(),
        };
        const refreshOptions = getOptions(
          getHeader(getToken()),
          refreshTokenQuery,
          refreshToken,
        );
        // Get new Token with refresh token
        let refreshResponse = await fetch(url, refreshOptions);
        let refreshData = await refreshResponse.json();

        if (refreshData.errors) {
          const message = refreshData.errors[0].message;
          if (
            message == 'Refresh token is expired' ||
            message == 'Invalid refresh token'
          ) {
            signOut();
            location.replace('/');
            return refreshData;
          }
        } else {
          setToken(refreshData.data.refreshToken.token);
          // Refetch
          const newOptions = getOptions(
            getHeader(getToken()),
            operation.text,
            variables,
          );
          let newResponse = await fetch(url, newOptions);
          let newData = await newResponse.json();
          return newData;
        }
      } else return data;
    } else return data;
  }

  return getDataAsync();
  /*
   */
});

// 5
const environment = new Environment({
  network,
  store,
});

// 6
export default environment;
