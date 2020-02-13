import React from 'react';
import { TabPage } from '../../atoms/Tabs';

import CategoryListRender from './CategoryListRender';
import ProductListRender from './ProductListRender';
import { withRouter } from 'found';
import { useTranslation } from 'react-i18next';

const ProductPage = props => {
  const { t } = useTranslation();
  const tabItems = [
    {
      label: t('products.product-list'),
      component: <ProductListRender />,
    },
    {
      label: t('products.category'),
      component: <CategoryListRender />,
    },
  ];

  return <TabPage items={tabItems} />;
};
export default withRouter(ProductPage);
