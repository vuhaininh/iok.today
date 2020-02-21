/**
 * @flow
 * @relayHash 6d1b52aedea2a04862c7158d238074b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LogInMutationInput = {|
  email: string,
  password: string,
  id?: ?string,
  clientMutationId?: ?string,
|};
export type LoginUserMutationVariables = {|
  input: LogInMutationInput
|};
export type LoginUserMutationResponse = {|
  +login: ?{|
    +token: ?string,
    +user: ?{|
      +id: string,
      +email: string,
      +groups: $ReadOnlyArray<{|
        +name: string
      |}>,
    |},
    +refreshToken: ?string,
  |}
|};
export type LoginUserMutation = {|
  variables: LoginUserMutationVariables,
  response: LoginUserMutationResponse,
|};
*/


/*
mutation LoginUserMutation(
  $input: LogInMutationInput!
) {
  login(input: $input) {
    token
    user {
      id
      email
      groups {
        name
        id
      }
    }
    refreshToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LogInMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "refreshToken",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LogInMutationPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "UserNode",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "groups",
                "storageKey": null,
                "args": null,
                "concreteType": "GroupNode",
                "plural": true,
                "selections": [
                  (v5/*: any*/)
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "login",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LogInMutationPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "UserNode",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "groups",
                "storageKey": null,
                "args": null,
                "concreteType": "GroupNode",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/)
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginUserMutation",
    "id": null,
    "text": "mutation LoginUserMutation(\n  $input: LogInMutationInput!\n) {\n  login(input: $input) {\n    token\n    user {\n      id\n      email\n      groups {\n        name\n        id\n      }\n    }\n    refreshToken\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '02aed7c172c8d362efccf61350f433e5';
module.exports = node;
