import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import IndividualList from './IndividualList';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const IndividualListRenderQuery = graphql`
  query IndividualListRenderQuery($MAX_RECORDS: Int!) {
    individualCustomerProfiles(first: $MAX_RECORDS)
      @connection(
        key: "IndividualCustomerList_individualCustomerProfiles"
      ) {
      edges {
        node {
          id
          firstName
          lastName
          email
          mobile
          address
          position
          dob
          own {
            code
            customerGroup {
              code
              name
            }
          }
        }
      }
    }
  }
`;
class IndividualListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={IndividualListRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Individual',
            dataProperty: 'individualCustomerProfiles',
          };
          return ParentComponentRenderer(
            IndividualList,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default IndividualListRender;
