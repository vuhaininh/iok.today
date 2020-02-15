import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import CategoryList from './CategoryList';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const CategoryListRenderQuery = graphql`
  query CategoryListRenderQuery($MAX_RECORDS: Int!) {
    categories(first: $MAX_RECORDS)
      @connection(key: "CategoryList_categories") {
      edges {
        node {
          code
          name
        }
      }
    }
  }
`;
class CategoryListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CategoryListRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Category',
            dataProperty: 'categories',
          };

          return ParentComponentRenderer(
            CategoryList,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default CategoryListRender;
