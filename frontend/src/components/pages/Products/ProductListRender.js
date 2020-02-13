import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import ProductList from './ProductList';
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
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return props.products == null ? (
              <div>No Product</div>
            ) : (
              <div>
                <ProductList products={props.products} />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
export default ProductListRender;
