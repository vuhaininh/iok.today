/**
 * @flow
 * @relayHash c4b2cd16da95ffdf314522d3446adef9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductInput = {|
  category: string,
  code: string,
  name: string,
  listedPrice?: ?number,
  attributes?: ?string,
  isActive?: ?boolean,
  orders?: ?$ReadOnlyArray<?string>,
|};
export type CreateProductMutationVariables = {|
  input: CreateProductInput
|};
export type CreateProductMutationResponse = {|
  +createProduct: ?{|
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
export type CreateProductMutation = {|
  variables: CreateProductMutationVariables,
  response: CreateProductMutationResponse,
|};
*/


/*
mutation CreateProductMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
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
    "name": "input",
    "type": "CreateProductInput!",
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
    "name": "createProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateProductMutation",
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
    "name": "CreateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateProductMutation",
    "id": null,
    "text": "mutation CreateProductMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    product {\n      id\n      code\n      name\n      listedPrice\n      attributes\n      updatedAt\n      category {\n        id\n        code\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e8b6e3308d47522bcd135e3d136bed9';
module.exports = node;
