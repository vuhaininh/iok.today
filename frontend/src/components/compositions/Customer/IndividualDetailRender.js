import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import IndividualDetail from './IndividualDetail';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
const IndividualDetailRenderQuery = graphql`
  query IndividualDetailRenderQuery($id: ID!) {
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
        }
      }
    }
  }
`;
class IndividualDetailRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={IndividualDetailRenderQuery}
        variables={{
          id: this.props.match.params.icId,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Individual',
            dataProperty: 'individualCustomerProfile',
          };
          return ParentComponentRenderer(
            IndividualDetail,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default IndividualDetailRender;
