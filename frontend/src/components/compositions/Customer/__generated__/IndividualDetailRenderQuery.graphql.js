/**
 * @flow
 * @relayHash 1c23932bb2c1cac4ef58f19da9500d8c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IndividualDetailRenderQueryVariables = {|
  id: string
|};
export type IndividualDetailRenderQueryResponse = {|
  +individualCustomerProfile: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +mobile: ?string,
    +address: ?string,
    +position: string,
    +dob: ?any,
    +email: ?string,
    +liability: ?number,
    +liabilityLimit: ?number,
    +own: {|
      +code: string,
      +customerGroup: {|
        +code: string,
        +name: string,
      |},
    |},
  |}
|};
export type IndividualDetailRenderQuery = {|
  variables: IndividualDetailRenderQueryVariables,
  response: IndividualDetailRenderQueryResponse,
|};
*/


/*
query IndividualDetailRenderQuery(
  $id: ID!
) {
  individualCustomerProfile(id: $id) {
    id
    firstName
    lastName
    mobile
    address
    position
    dob
    email
    liability
    liabilityLimit
    own {
      code
      customerGroup {
        code
        name
        id
      }
      id
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
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mobile",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "position",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dob",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liability",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "liabilityLimit",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "IndividualDetailRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "individualCustomerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "IndividualCustomerProfileNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "own",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerNode",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "customerGroup",
                "storageKey": null,
                "args": null,
                "concreteType": "CustomerGroupNode",
                "plural": false,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "IndividualDetailRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "individualCustomerProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "IndividualCustomerProfileNode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "own",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerNode",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "customerGroup",
                "storageKey": null,
                "args": null,
                "concreteType": "CustomerGroupNode",
                "plural": false,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "IndividualDetailRenderQuery",
    "id": null,
    "text": "query IndividualDetailRenderQuery(\n  $id: ID!\n) {\n  individualCustomerProfile(id: $id) {\n    id\n    firstName\n    lastName\n    mobile\n    address\n    position\n    dob\n    email\n    liability\n    liabilityLimit\n    own {\n      code\n      customerGroup {\n        code\n        name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49573c9d429fe197118c5130b4415801';

module.exports = node;
