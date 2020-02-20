import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import ProductList from './ProductList';
import { ParentComponentRenderer } from '../../atoms/ComponentRenderer';
import { MAX_RECORDS } from '../../../utils/Constants';
const ProductListRenderQuery = graphql`
  query ProductListRenderQuery($MAX_RECORDS: Int!) {
    products(first: $MAX_RECORDS)
      @connection(key: "ProductList_products") {
      edges {
        node {
          id
          code
          name
          listedPrice
          attributes
          updatedAt
          category {
            id
            code
            name
          }
        }
      }
    }
  }
`;
class ProductListRender extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ProductListRenderQuery}
        variables={{
          MAX_RECORDS: MAX_RECORDS,
        }}
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
