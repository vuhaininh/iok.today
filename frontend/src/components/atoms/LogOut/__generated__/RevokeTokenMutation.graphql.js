/**
 * @flow
 * @relayHash b1bf4c450f087b9ad2cf08c6daa5f907
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RevokeTokenMutationVariables = {|
  refreshToken: string
|};
export type RevokeTokenMutationResponse = {|
  +revokeToken: ?{|
    +revoked: ?number
  |}
|};
export type RevokeTokenMutation = {|
  variables: RevokeTokenMutationVariables,
  response: RevokeTokenMutationResponse,
|};
*/


/*
mutation RevokeTokenMutation(
  $refreshToken: String!
) {
  revokeToken(input: {refreshToken: $refreshToken}) {
    revoked
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
    "name": "revokeToken",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "input",
        "fields": [
          {
            "kind": "Variable",
            "name": "refreshToken",
            "variableName": "refreshToken"
          }
        ]
      }
    ],
    "concreteType": "RevokePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "revoked",
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
    "name": "RevokeTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RevokeTokenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RevokeTokenMutation",
    "id": null,
    "text": "mutation RevokeTokenMutation(\n  $refreshToken: String!\n) {\n  revokeToken(input: {refreshToken: $refreshToken}) {\n    revoked\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '76df35bd91fc0eec108fa60ff7f32612';
module.exports = node;
