import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import StaffDetail from './StaffDetail';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
const StaffDetailRenderQuery = graphql`
  query StaffDetailRenderQuery($id: ID!) {
    staffProfile(id: $id) {
      id
      firstName
      lastName
      position
      dob
      mobile
      address
      liability
      liabilityLimit
      user {
        id
        email
      }
    }
  }
`;
class StaffDetailRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={StaffDetailRenderQuery}
        variables={{
          id: this.props.match.params.staffId,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Staff',
            dataProperty: 'staffProfile',
          };
          return ParentComponentRenderer(
            StaffDetail,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default StaffDetailRender;
