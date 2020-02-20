/**
 * @flow
 * @relayHash 8b53d67035309f5ca5359529ac187e1a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PatchProductInput = {|
  category?: ?string,
  code?: ?string,
  name?: ?string,
  listedPrice?: ?number,
  attributes?: ?string,
  isActive?: ?boolean,
  createdAt?: ?any,
  updatedAt?: ?any,
  orders?: ?$ReadOnlyArray<?string>,
|};
export type PatchProductMutationVariables = {|
  id: string,
  input: PatchProductInput,
|};
export type PatchProductMutationResponse = {|
  +patchProduct: ?{|
    +product: ?{|
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
  |}
|};
export type PatchProductMutation = {|
  variables: PatchProductMutationVariables,
  response: PatchProductMutationResponse,
|};
*/


/*
mutation PatchProductMutation(
  $id: ID!
  $input: PatchProductInput!
) {
  patchProduct(id: $id, input: $input) {
    product {
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
    "type": "PatchProductInput!",
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
    "name": "patchProduct",
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
    "concreteType": "PatchProductMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
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
    "name": "PatchProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PatchProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "PatchProductMutation",
    "id": null,
    "text": "mutation PatchProductMutation(\n  $id: ID!\n  $input: PatchProductInput!\n) {\n  patchProduct(id: $id, input: $input) {\n    product {\n      id\n      code\n      name\n      listedPrice\n      attributes\n      updatedAt\n      category {\n        id\n        code\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '55bb7f536a1ca0871f1b623affb7e117';
module.exports = node;
