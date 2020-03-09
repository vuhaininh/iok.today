import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import CompanyList from './CompanyList';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const CompanyListRenderQuery = graphql`
  query CompanyListRenderQuery($MAX_RECORDS: Int!) {
    companyCustomerProfiles(first: $MAX_RECORDS)
      @connection(
        key: "CompanyCustomerList_companyCustomerProfiles"
      ) {
      edges {
        node {
          id
          own {
            code
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
    }
  }
`;
class CompanyListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CompanyListRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Company',
            dataProperty: 'companyCustomerProfiles',
          };
          return ParentComponentRenderer(
            CompanyList,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default CompanyListRender;
