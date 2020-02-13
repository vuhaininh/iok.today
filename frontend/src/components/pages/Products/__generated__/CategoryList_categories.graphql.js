/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryList_categories$ref: FragmentReference;
declare export opaque type CategoryList_categories$fragmentType: CategoryList_categories$ref;
export type CategoryList_categories = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +code: string,
      +name: string,
    |}
  |}>,
  +$refType: CategoryList_categories$ref,
|};
export type CategoryList_categories$data = CategoryList_categories;
export type CategoryList_categories$key = {
  +$data?: CategoryList_categories$data,
  +$fragmentRefs: CategoryList_categories$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CategoryList_categories",
  "type": "CategoryNodeConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '87798d2963df367b992b0ccd2d0419bf';
module.exports = node;
