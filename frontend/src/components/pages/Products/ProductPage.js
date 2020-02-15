import React from 'react';
import { TabPage } from '../../atoms/Tabs';

import { CategoryManagement } from '../../compositions/Category';
import ProductListRender from './ProductListRender';
import { withRouter } from 'found';
import { useTranslation } from 'react-i18next';

const ProductPage = props => {
  const { t } = useTranslation();
  const tabItems = [
    {
      label: t('products.product-list'),
      component: <CategoryManagement />,
    },
    {
      label: t('products.category'),
      component: <CategoryManagement />,
    },
  ];

  return <TabPage items={tabItems} />;
};
export default withRouter(ProductPage);
