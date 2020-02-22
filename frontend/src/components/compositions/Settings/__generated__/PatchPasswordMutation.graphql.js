/**
 * @flow
 * @relayHash be352d0565222f1c18cee9040659adef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PatchUserInput = {|
  password?: ?string,
  email?: ?string,
  firstName?: ?string,
  lastName?: ?string,
|};
export type PatchPasswordMutationVariables = {|
  id: string,
  input: PatchUserInput,
|};
export type PatchPasswordMutationResponse = {|
  +patchUser: ?{|
    +user: ?{|
      +id: string,
      +email: string,
    |}
  |}
|};
export type PatchPasswordMutation = {|
  variables: PatchPasswordMutationVariables,
  response: PatchPasswordMutationResponse,
|};
*/


/*
mutation PatchPasswordMutation(
  $id: ID!
  $input: PatchUserInput!
) {
  patchUser(id: $id, input: $input) {
    user {
      id
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "PatchUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "patchUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PatchUserMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserNode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PatchPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PatchPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PatchPasswordMutation",
    "id": null,
    "text": "mutation PatchPasswordMutation(\n  $id: ID!\n  $input: PatchUserInput!\n) {\n  patchUser(id: $id, input: $input) {\n    user {\n      id\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '199a57c43b88b2d06255256989b91bd4';
module.exports = node;
