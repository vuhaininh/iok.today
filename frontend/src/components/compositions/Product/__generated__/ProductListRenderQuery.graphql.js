/**
 * @flow
 * @relayHash c6431fec2ad03c037e2f3f4f0eb329cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductListRenderQueryVariables = {|
  MAX_RECORDS: number
|};
export type ProductListRenderQueryResponse = {|
  +products: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +code: string,
        +name: string,
        +listedPrice: number,
        +attributes: string,
        +updatedAt: any,
        +category: {|
          +id: string,
          +code: string,
          +name: string,
        |},
      |}
    |}>
  |}
|};
export type ProductListRenderQuery = {|
  variables: ProductListRenderQueryVariables,
  response: ProductListRenderQueryResponse,
|};
*/


/*
query ProductListRenderQuery(
  $MAX_RECORDS: Int!
) {
  products(first: $MAX_RECORDS) {
    edges {
      node {
        id
        code
        name
        listedPrice
        attributes
        updatedAt
        category {
          id
          code
          name
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
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ProductNodeEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductNode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "listedPrice",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "attributes",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryNode",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
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
v5 = [
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
    "name": "ProductListRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "products",
        "name": "__ProductList_products_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductNodeConnection",
        "plural": false,
        "selections": (v4/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductListRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": (v5/*: any*/),
        "concreteType": "ProductNodeConnection",
        "plural": false,
        "selections": (v4/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "products",
        "args": (v5/*: any*/),
        "handle": "connection",
        "key": "ProductList_products",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductListRenderQuery",
    "id": null,
    "text": "query ProductListRenderQuery(\n  $MAX_RECORDS: Int!\n) {\n  products(first: $MAX_RECORDS) {\n    edges {\n      node {\n        id\n        code\n        name\n        listedPrice\n        attributes\n        updatedAt\n        category {\n          id\n          code\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": "MAX_RECORDS",
          "cursor": null,
          "direction": "forward",
          "path": [
            "products"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9535c6b77e91e02cd7cf511f53531b3e';
module.exports = node;
