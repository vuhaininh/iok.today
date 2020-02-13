import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import CategoryList from './CategoryList';
const CategoryListRenderQuery = graphql`
  query CategoryListRenderQuery {
    categories {
      ...CategoryList_categories
    }
  }
`;
class CategoryListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CategoryListRenderQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return props.categories == null ? (
              <div>No Category</div>
            ) : (
              <div>
                <CategoryList categories={props.categories} />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
export default CategoryListRender;
