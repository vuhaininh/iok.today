import React from 'react';
import { TabPage } from '../../atoms/Tabs';

import { CategoryManagement } from '../../compositions/Category';
import { ProductManagement } from '../../compositions/Product';
import { withRouter } from 'found';
import { useTranslation } from 'react-i18next';

const ProductPage = props => {
  const { t } = useTranslation();
  const tabItems = [
    {
      label: t('products.product-list'),
      component: <ProductManagement />,
    },
    {
      label: t('products.category'),
      component: <CategoryManagement />,
    },
  ];

  return <TabPage items={tabItems} className="ml3 mb3 mr2" />;
};
export default withRouter(ProductPage);
