/**
 * @flow
 * @relayHash adc3a2dc2e9d3bcf4aee81d7a71d362c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompanyListRenderQueryVariables = {|
  MAX_RECORDS: number
|};
export type CompanyListRenderQueryResponse = {|
  +companyCustomerProfiles: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +own: {|
          +code: string
        |},
        +name: string,
        +address: string,
        +taxCode: string,
        +liability: ?number,
        +liabilityLimit: ?number,
        +representatives: {|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +firstName: ?string,
              +lastName: ?string,
              +position: string,
            |}
          |}>
        |},
      |}
    |}>
  |}
|};
export type CompanyListRenderQuery = {|
  variables: CompanyListRenderQueryVariables,
  response: CompanyListRenderQueryResponse,
|};
*/


/*
query CompanyListRenderQuery(
  $MAX_RECORDS: Int!
) {
  companyCustomerProfiles(first: $MAX_RECORDS) {
    edges {
      node {
        id
        own {
          code
          id
        }
        name
        address
        taxCode
        liability
        liabilityLimit
        representatives {
          edges {
            node {
              id
              firstName
              lastName
              position
            }
          }
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
  "name": "code",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "taxCode",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liability",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liabilityLimit",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "representatives",
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
            }
          ]
        }
      ]
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v11 = {
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
v12 = [
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
    "name": "CompanyListRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "companyCustomerProfiles",
        "name": "__CompanyCustomerList_companyCustomerProfiles_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "CompanyCustomerProfileNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyCustomerProfileNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CompanyCustomerProfileNode",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "own",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CustomerNode",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ]
                  },
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              },
              (v10/*: any*/)
            ]
          },
          (v11/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CompanyListRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "companyCustomerProfiles",
        "storageKey": null,
        "args": (v12/*: any*/),
        "concreteType": "CompanyCustomerProfileNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CompanyCustomerProfileNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CompanyCustomerProfileNode",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "own",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CustomerNode",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ]
                  },
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              },
              (v10/*: any*/)
            ]
          },
          (v11/*: any*/)
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "companyCustomerProfiles",
        "args": (v12/*: any*/),
        "handle": "connection",
        "key": "CompanyCustomerList_companyCustomerProfiles",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CompanyListRenderQuery",
    "id": null,
    "text": "query CompanyListRenderQuery(\n  $MAX_RECORDS: Int!\n) {\n  companyCustomerProfiles(first: $MAX_RECORDS) {\n    edges {\n      node {\n        id\n        own {\n          code\n          id\n        }\n        name\n        address\n        taxCode\n        liability\n        liabilityLimit\n        representatives {\n          edges {\n            node {\n              id\n              firstName\n              lastName\n              position\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": "MAX_RECORDS",
          "cursor": null,
          "direction": "forward",
          "path": [
            "companyCustomerProfiles"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8826d02ddf616374be9c946faaee1918';

module.exports = node;
