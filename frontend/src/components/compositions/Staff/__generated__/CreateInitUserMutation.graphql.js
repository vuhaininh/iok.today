/**
 * @flow
 * @relayHash 1a75db8112b628791a87911fe35846dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  password: string,
  email: string,
|};
export type CreateInitUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateInitUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string,
      +email: string,
    |}
  |}
|};
export type CreateInitUserMutation = {|
  variables: CreateInitUserMutationVariables,
  response: CreateInitUserMutationResponse,
|};
*/


/*
mutation CreateInitUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
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
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateUserMutation",
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
    "name": "CreateInitUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateInitUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateInitUserMutation",
    "id": null,
    "text": "mutation CreateInitUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '08088ce0a60413e8ba5671236e496f4c';

module.exports = node;
