import React, { Component } from 'react';
import { Table } from '../../atoms/Table';
import { createFragmentContainer, graphql } from 'react-relay';
import { withTranslation } from 'react-i18next';

class ProductList extends Component {
  render() {
    const { products, t } = this.props;
    const columns = [
      {
        title: t('products.code'),
        field: 'code',
      },
      {
        title: t('products.name'),
        field: 'name',
      },
      {
        title: t('products.listed-price'),
        field: 'listedPrice',
        render: rowData => rowData.listedPrice.toLocaleString(),
        defaultSort: 'asc',
        customSort: (a, b) => {
          return Number(a.listedPrice) - Number(b.listedPrice);
        },
      },
      {
        title: t('products.category'),
        field: 'category',
      },
    ];

    const getData = products => {
      return products.edges.map(({ node }) => {
        const { code, name, listedPrice, category } = node;

        return {
          code,
          name,
          listedPrice,
          category: category.name,
        };
      });
    };

    return <Table columns={columns} data={getData(products)} />;
  }
}

export default withTranslation()(
  createFragmentContainer(ProductList, {
    products: graphql`
      fragment ProductList_products on ProductNodeConnection {
        edges {
          node {
            code
            name
            listedPrice
            category {
              name
            }
          }
        }
      }
    `,
  }),
);
