/**
 * @flow
 * @relayHash dc0022ff66c26c246cd5ac0634ae0f0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCategoryInput = {|
  code: string,
  name: string,
  isActive?: ?boolean,
  products?: ?$ReadOnlyArray<?string>,
|};
export type CreateCategoryMutationVariables = {|
  input: CreateCategoryInput
|};
export type CreateCategoryMutationResponse = {|
  +createCategory: ?{|
    +category: ?{|
      +id: string,
      +name: string,
      +code: string,
    |}
  |}
|};
export type CreateCategoryMutation = {|
  variables: CreateCategoryMutationVariables,
  response: CreateCategoryMutationResponse,
|};
*/


/*
mutation CreateCategoryMutation(
  $input: CreateCategoryInput!
) {
  createCategory(input: $input) {
    category {
      id
      name
      code
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCategoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCategory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCategoryMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "category",
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
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
    "name": "CreateCategoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCategoryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCategoryMutation",
    "id": null,
    "text": "mutation CreateCategoryMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    category {\n      id\n      name\n      code\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67d6ecce46c2d1f8e69dc43b51a4559a';
module.exports = node;
