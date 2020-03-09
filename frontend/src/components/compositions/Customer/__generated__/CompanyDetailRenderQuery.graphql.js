/**
 * @flow
 * @relayHash b0df81373d80b759987cd04738adc7a7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompanyDetailRenderQueryVariables = {|
  id: string
|};
export type CompanyDetailRenderQueryResponse = {|
  +companyCustomerProfile: ?{|
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
|};
export type CompanyDetailRenderQuery = {|
  variables: CompanyDetailRenderQueryVariables,
  response: CompanyDetailRenderQueryResponse,
|};
*/


/*
query CompanyDetailRenderQuery(
  $id: ID!
) {
  companyCustomerProfile(id: $id) {
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "taxCode",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liability",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liabilityLimit",
  "args": null,
  "storageKey": null
},
v9 = {
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
            (v2/*: any*/),
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CompanyDetailRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "companyCustomerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompanyCustomerProfileNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "own",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerNode",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CompanyDetailRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "companyCustomerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CompanyCustomerProfileNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "own",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerNode",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CompanyDetailRenderQuery",
    "id": null,
    "text": "query CompanyDetailRenderQuery(\n  $id: ID!\n) {\n  companyCustomerProfile(id: $id) {\n    id\n    own {\n      code\n      id\n    }\n    name\n    address\n    taxCode\n    liability\n    liabilityLimit\n    representatives {\n      edges {\n        node {\n          id\n          firstName\n          lastName\n          position\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7a6ed39c84a121c06485f076edda1429';

module.exports = node;
