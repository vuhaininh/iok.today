/**
 * @flow
 * @relayHash 5cdaa4142bea089a6c5ae91c6647ce83
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PatchStaffProfileInput = {|
  firstName?: ?string,
  lastName?: ?string,
  mobile?: ?string,
  address?: ?string,
  position?: ?string,
  dob?: ?any,
  user?: ?string,
  liability?: ?number,
  liabilityLimit?: ?number,
|};
export type EditStaffDetailMutationVariables = {|
  id: string,
  input: PatchStaffProfileInput,
|};
export type EditStaffDetailMutationResponse = {|
  +patchStaffProfile: ?{|
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
export type EditStaffDetailMutation = {|
  variables: EditStaffDetailMutationVariables,
  response: EditStaffDetailMutationResponse,
|};
*/


/*
mutation EditStaffDetailMutation(
  $id: ID!
  $input: PatchStaffProfileInput!
) {
  patchStaffProfile(id: $id, input: $input) {
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "PatchStaffProfileInput!",
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
    "name": "patchStaffProfile",
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
    "concreteType": "PatchStaffProfileMutation",
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
    "name": "EditStaffDetailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditStaffDetailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditStaffDetailMutation",
    "id": null,
    "text": "mutation EditStaffDetailMutation(\n  $id: ID!\n  $input: PatchStaffProfileInput!\n) {\n  patchStaffProfile(id: $id, input: $input) {\n    staffProfile {\n      id\n      firstName\n      lastName\n      position\n      dob\n      mobile\n      address\n      liability\n      liabilityLimit\n      user {\n        id\n        email\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f3812ff555b732a76926478d844d5090';

module.exports = node;
