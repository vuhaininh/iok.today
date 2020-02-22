import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import StaffList from './StaffList';

import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const StaffListRenderQuery = graphql`
  query StaffListRenderQuery($MAX_RECORDS: Int!) {
    staffProfiles(first: $MAX_RECORDS)
      @connection(key: "StaffList_staffProfiles") {
      edges {
        node {
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
    }
  }
`;
class StaffListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={StaffListRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Staff',
            dataProperty: 'staffProfiles',
          };
          return ParentComponentRenderer(
            StaffList,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default StaffListRender;
