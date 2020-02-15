import React, { Component } from 'react';
import { Table } from '../../atoms/Table';
import { createFragmentContainer, graphql } from 'react-relay';
import { withTranslation } from 'react-i18next';

class CategoryList extends Component {
  render() {
    const { categories, t } = this.props;
    const columns = [
      {
        title: t('categories.code'),
        field: 'code',
      },
      {
        title: t('categories.name'),
        field: 'name',
      },
    ];

    const getData = categories => {
      return categories.edges.map(({ node }) => {
        const { code, name } = node;
        return {
          code,
          name,
        };
      });
    };
    return <Table columns={columns} data={getData(categories)} />;
  }
}
export default withTranslation()(CategoryList);
