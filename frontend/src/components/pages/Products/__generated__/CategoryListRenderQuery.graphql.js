/**
 * @flow
 * @relayHash 979dc9ee7ded14b0cb320bd123ccfc58
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryList_categories$ref = any;
export type CategoryListRenderQueryVariables = {||};
export type CategoryListRenderQueryResponse = {|
  +categories: ?{|
    +$fragmentRefs: CategoryList_categories$ref
  |}
|};
export type CategoryListRenderQuery = {|
  variables: CategoryListRenderQueryVariables,
  response: CategoryListRenderQueryResponse,
|};
*/


/*
query CategoryListRenderQuery {
  categories {
    ...CategoryList_categories
  }
}

fragment CategoryList_categories on CategoryNodeConnection {
  edges {
    node {
      code
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CategoryListRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CategoryList_categories",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoryListRenderQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": [
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
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CategoryListRenderQuery",
    "id": null,
    "text": "query CategoryListRenderQuery {\n  categories {\n    ...CategoryList_categories\n  }\n}\n\nfragment CategoryList_categories on CategoryNodeConnection {\n  edges {\n    node {\n      code\n      name\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ee7a453412807872b47398150a7844cf';
module.exports = node;
