/**
 * @flow
 * @relayHash 487c708c55ca54ee4225a2e088eb0a39
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IndividualListRenderQueryVariables = {|
  MAX_RECORDS: number
|};
export type IndividualListRenderQueryResponse = {|
  +individualCustomerProfiles: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: ?string,
        +lastName: ?string,
        +email: ?string,
        +mobile: ?string,
        +address: ?string,
        +position: string,
        +dob: ?any,
        +own: {|
          +code: string,
          +customerGroup: {|
            +code: string,
            +name: string,
          |},
        |},
      |}
    |}>
  |}
|};
export type IndividualListRenderQuery = {|
  variables: IndividualListRenderQueryVariables,
  response: IndividualListRenderQueryResponse,
|};
*/


/*
query IndividualListRenderQuery(
  $MAX_RECORDS: Int!
) {
  individualCustomerProfiles(first: $MAX_RECORDS) {
    edges {
      node {
        id
        firstName
        lastName
        email
        mobile
        address
        position
        dob
        own {
          code
          customerGroup {
            code
            name
            id
          }
          id
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
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
  "name": "mobile",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "position",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dob",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v13 = {
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
},
v14 = [
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
    "name": "IndividualListRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "individualCustomerProfiles",
        "name": "__IndividualCustomerList_individualCustomerProfiles_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "IndividualCustomerProfileNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "IndividualCustomerProfileNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "IndividualCustomerProfileNode",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "own",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CustomerNode",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "customerGroup",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CustomerGroupNode",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v11/*: any*/)
                ]
              },
              (v12/*: any*/)
            ]
          },
          (v13/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "IndividualListRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "individualCustomerProfiles",
        "storageKey": null,
        "args": (v14/*: any*/),
        "concreteType": "IndividualCustomerProfileNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "IndividualCustomerProfileNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "IndividualCustomerProfileNode",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "own",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CustomerNode",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "customerGroup",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CustomerGroupNode",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v1/*: any*/)
                        ]
                      },
                      (v1/*: any*/)
                    ]
                  },
                  (v11/*: any*/)
                ]
              },
              (v12/*: any*/)
            ]
          },
          (v13/*: any*/)
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "individualCustomerProfiles",
        "args": (v14/*: any*/),
        "handle": "connection",
        "key": "IndividualCustomerList_individualCustomerProfiles",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "IndividualListRenderQuery",
    "id": null,
    "text": "query IndividualListRenderQuery(\n  $MAX_RECORDS: Int!\n) {\n  individualCustomerProfiles(first: $MAX_RECORDS) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        email\n        mobile\n        address\n        position\n        dob\n        own {\n          code\n          customerGroup {\n            code\n            name\n            id\n          }\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": "MAX_RECORDS",
          "cursor": null,
          "direction": "forward",
          "path": [
            "individualCustomerProfiles"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e7024574ea14144060c866f824a7f0a';

module.exports = node;
