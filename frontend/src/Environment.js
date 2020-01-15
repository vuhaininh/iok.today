// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

import { getToken } from './utils';
import RefreshTokenMutation from './mutations/RefreshTokenMutation';
// 2
const store = new Store(new RecordSource());
const header =
  getToken() == null
    ? {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken()}`,
      };

// 3
const network = Network.create((operation, variables) => {
  // 4
  async function getDataAsync() {
    const url = 'http://localhost:8000/graphql/';
    const options = {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    };
    let reFetchData = false;
    const reFetch = () => {
      reFetchData = true;
      console.log(reFetchData);
    };
    let response = await fetch(url, options);
    let data = await response.json();

    if (data.errors) {
      if (data.errors[0].message == 'Signature has expired') {
        RefreshTokenMutation(reFetch);

        return data;
      }
    } else return data;
    //console.log(data);
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
