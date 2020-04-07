/**
 * @flow
 * @relayHash 953bc799e6b3f5d3de2a371d2e74e9c0
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
      +firstName: ?string,
      +lastName: ?string,
      +position: string,
      +dob: ?any,
      +mobile: ?string,
      +address: ?string,
      +liability: ?number,
      +liabilityLimit: ?number,
      +user: {|
        +id: string,
        +email: string,
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
      firstName
      lastName
      position
      dob
      mobile
      address
      liability
      liabilityLimit
      user {
        id
        email
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createStaffProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "position",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dob",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mobile",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "address",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "liability",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "liabilityLimit",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "UserNode",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateStaffProfileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateStaffProfileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateStaffProfileMutation",
    "id": null,
    "text": "mutation CreateStaffProfileMutation(\n  $input: CreateStaffProfileInput!\n) {\n  createStaffProfile(input: $input) {\n    staffProfile {\n      id\n      firstName\n      lastName\n      position\n      dob\n      mobile\n      address\n      liability\n      liabilityLimit\n      user {\n        id\n        email\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a79dc46178de6f61ebd41210fe2a2c4e';

module.exports = node;
