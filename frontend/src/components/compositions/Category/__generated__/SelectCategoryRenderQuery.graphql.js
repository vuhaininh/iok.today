/**
 * @flow
 * @relayHash 3ac8189664ded98e74b2efdf262ccba8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SelectCategoryRenderQueryVariables = {|
  MAX_RECORDS: number
|};
export type SelectCategoryRenderQueryResponse = {|
  +categories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +code: string,
        +name: string,
      |}
    |}>
  |}
|};
export type SelectCategoryRenderQuery = {|
  variables: SelectCategoryRenderQueryVariables,
  response: SelectCategoryRenderQueryResponse,
|};
*/


/*
query SelectCategoryRenderQuery(
  $MAX_RECORDS: Int!
) {
  categories(first: $MAX_RECORDS) {
    edges {
      node {
        id
        code
        name
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
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "CategoryNodeEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNode",
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
            "name": "code",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
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
v2 = [
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
    "name": "SelectCategoryRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "categories",
        "name": "__CategoryList_categories_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SelectCategoryRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": (v1/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "categories",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "CategoryList_categories",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SelectCategoryRenderQuery",
    "id": null,
    "text": "query SelectCategoryRenderQuery(\n  $MAX_RECORDS: Int!\n) {\n  categories(first: $MAX_RECORDS) {\n    edges {\n      node {\n        id\n        code\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": "MAX_RECORDS",
          "cursor": null,
          "direction": "forward",
          "path": [
            "categories"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5685b162f53f04b282c3412498b33c4';
module.exports = node;
