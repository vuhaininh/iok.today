/**
 * @flow
 * @relayHash bfe03015deb44744360965d8b7e7d4db
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StaffDetailRenderQueryVariables = {|
  id: string
|};
export type StaffDetailRenderQueryResponse = {|
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
|};
export type StaffDetailRenderQuery = {|
  variables: StaffDetailRenderQueryVariables,
  response: StaffDetailRenderQueryResponse,
|};
*/


/*
query StaffDetailRenderQuery(
  $id: ID!
) {
  staffProfile(id: $id) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
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
    "name": "staffProfile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StaffDetailRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StaffDetailRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "StaffDetailRenderQuery",
    "id": null,
    "text": "query StaffDetailRenderQuery(\n  $id: ID!\n) {\n  staffProfile(id: $id) {\n    id\n    firstName\n    lastName\n    position\n    dob\n    mobile\n    address\n    liability\n    liabilityLimit\n    user {\n      id\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '60d269f74346e5481082119d6f0890e0';

module.exports = node;
