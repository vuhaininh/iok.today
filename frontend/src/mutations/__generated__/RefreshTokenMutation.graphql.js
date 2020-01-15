/**
 * @flow
 * @relayHash ef91b64c891bf7b41ac26356ad1ac850
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RefreshTokenMutationVariables = {|
  refreshToken: string
|};
export type RefreshTokenMutationResponse = {|
  +refreshToken: ?{|
    +token: ?string
  |}
|};
export type RefreshTokenMutation = {|
  variables: RefreshTokenMutationVariables,
  response: RefreshTokenMutationResponse,
|};
*/


/*
mutation RefreshTokenMutation(
  $refreshToken: String!
) {
  refreshToken(refreshToken: $refreshToken) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "refreshToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "refreshToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "refreshToken",
        "variableName": "refreshToken"
      }
    ],
    "concreteType": "Refresh",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RefreshTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RefreshTokenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RefreshTokenMutation",
    "id": null,
    "text": "mutation RefreshTokenMutation(\n  $refreshToken: String!\n) {\n  refreshToken(refreshToken: $refreshToken) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c30b1c41ed9423bcdbbef9918b2c4e96';
module.exports = node;
