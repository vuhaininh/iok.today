import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import SelectCategory from './SelectCategory';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const SelectCategoryRenderQuery = graphql`
  query SelectCategoryRenderQuery($MAX_RECORDS: Int!) {
    categories(first: $MAX_RECORDS)
      @connection(key: "CategoryList_categories") {
      edges {
        node {
          id
          code
          name
        }
      }
    }
  }
`;
class SelectCategoryRender extends Component {
  render() {
    const parentProps = this.props;

    return (
      <QueryRenderer
        environment={environment}
        query={SelectCategoryRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Category',
            dataProperty: 'categories',
          };

          return ParentComponentRenderer(
            SelectCategory,
            rendered,
            error,
            props,
            parentProps,
          );
        }}
      />
    );
  }
}
export default SelectCategoryRender;
