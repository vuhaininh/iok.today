import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import ProductList from './ProductList';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
const ProductListRenderQuery = graphql`
  query ProductListRenderQuery {
    products {
      ...ProductList_products
    }
  }
`;
class ProductListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ProductListRenderQuery}
        render={({ error, props }) => {
          const rendered = {
            nullMessage: 'No Product',
            dataProperty: 'products',
          };
          return ParentComponentRenderer(
            ProductList,
            rendered,
            error,
            props,
          );
        }}
      />
    );
  }
}
export default ProductListRender;
