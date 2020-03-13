/**
 * @flow
 * @relayHash 736ab0f545f745a66a4c7c19b936b524
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateStaffProfileInput = {|
  firstName?: ?string,
  lastName?: ?string,
  mobile?: ?string,
  address?: ?string,
  position?: ?string,
  dob?: ?any,
  user: string,
  liability?: ?number,
  liabilityLimit?: ?number,
|};
export type CreateStaffProfileMutationVariables = {|
  input: CreateStaffProfileInput
|};
export type CreateStaffProfileMutationResponse = {|
  +createStaffProfile: ?{|
    +staffProfile: ?{|
      +id: string,
      +user: {|
        +email: string
      |},
    |}
  |}
|};
export type CreateStaffProfileMutation = {|
  variables: CreateStaffProfileMutationVariables,
  response: CreateStaffProfileMutationResponse,
|};
*/


/*
mutation CreateStaffProfileMutation(
  $input: CreateStaffProfileInput!
) {
  createStaffProfile(input: $input) {
    staffProfile {
      id
      user {
        email
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateStaffProfileInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateStaffProfileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createStaffProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateStaffProfileMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "staffProfile",
            "storageKey": null,
            "args": null,
            "concreteType": "StaffProfileNode",
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
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateStaffProfileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createStaffProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateStaffProfileMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "staffProfile",
            "storageKey": null,
            "args": null,
            "concreteType": "StaffProfileNode",
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
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateStaffProfileMutation",
    "id": null,
    "text": "mutation CreateStaffProfileMutation(\n  $input: CreateStaffProfileInput!\n) {\n  createStaffProfile(input: $input) {\n    staffProfile {\n      id\n      user {\n        email\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '38174ee31f659db76e190640ebd68e8d';

module.exports = node;
