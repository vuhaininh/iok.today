/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_products$ref: FragmentReference;
declare export opaque type ProductList_products$fragmentType: ProductList_products$ref;
export type ProductList_products = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +code: string,
      +name: string,
      +listedPrice: number,
      +category: {|
        +name: string
      |},
    |}
  |}>,
  +$refType: ProductList_products$ref,
|};
export type ProductList_products$data = ProductList_products;
export type ProductList_products$key = {
  +$data?: ProductList_products$data,
  +$fragmentRefs: ProductList_products$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProductList_products",
  "type": "ProductNodeConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "code",
              "args": null,
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "listedPrice",
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
                (v0/*: any*/)
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '93c7f12ec00f441b8f3af1038f17f43c';
module.exports = node;
