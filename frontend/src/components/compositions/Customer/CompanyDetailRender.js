import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import CompanyDetail from './CompanyDetail';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
const CompanyDetailRenderQuery = graphql`
  query CompanyDetailRenderQuery($id: ID!) {
    companyCustomerProfile(id: $id) {
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
`;
class CompanyDetailRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CompanyDetailRenderQuery}
        variables={{
          id: this.props.match.params.ccId,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Company',
            dataProperty: 'companyCustomerProfile',
          };
          return ParentComponentRenderer(
            CompanyDetail,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default CompanyDetailRender;
