/**
 * @flow
 * @relayHash 6b81ff9d4604fe17dfb6d6321712cc3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StaffListRenderQueryVariables = {|
  MAX_RECORDS: number
|};
export type StaffListRenderQueryResponse = {|
  +staffProfiles: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +position: string,
        +dob: any,
        +mobile: string,
        +address: string,
        +liability: number,
        +liabilityLimit: number,
        +user: {|
          +id: string,
          +email: string,
        |},
      |}
    |}>
  |}
|};
export type StaffListRenderQuery = {|
  variables: StaffListRenderQueryVariables,
  response: StaffListRenderQueryResponse,
|};
*/


/*
query StaffListRenderQuery(
  $MAX_RECORDS: Int!
) {
  staffProfiles(first: $MAX_RECORDS) {
    edges {
      node {
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
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "MAX_RECORDS",
    "type": "Int!",
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
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "StaffProfileNodeEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "MAX_RECORDS"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StaffListRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "staffProfiles",
        "name": "__StaffList_staffProfiles_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "StaffProfileNodeConnection",
        "plural": false,
        "selections": (v2/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StaffListRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "staffProfiles",
        "storageKey": null,
        "args": (v3/*: any*/),
        "concreteType": "StaffProfileNodeConnection",
        "plural": false,
        "selections": (v2/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "staffProfiles",
        "args": (v3/*: any*/),
        "handle": "connection",
        "key": "StaffList_staffProfiles",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StaffListRenderQuery",
    "id": null,
    "text": "query StaffListRenderQuery(\n  $MAX_RECORDS: Int!\n) {\n  staffProfiles(first: $MAX_RECORDS) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        position\n        dob\n        mobile\n        address\n        liability\n        liabilityLimit\n        user {\n          id\n          email\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": "MAX_RECORDS",
          "cursor": null,
          "direction": "forward",
          "path": [
            "staffProfiles"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '004f0b5dc156be57d3b8e47dad825c6b';
module.exports = node;
