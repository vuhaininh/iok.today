import React from 'react';
import { TabPage } from '../../atoms/Tabs';

import { withRouter } from 'found';
import { useTranslation } from 'react-i18next';
import { CompanyManagement } from '../../compositions/Customer';
const CompanyCustomerPage = props => {
  const { t } = useTranslation();
  const tabItems = [
    {
      label: t('customers.company-list'),
      component: <CompanyManagement />,
    },
  ];

  return <TabPage items={tabItems} className="ml3 mb3 mr2" />;
};
export default withRouter(CompanyCustomerPage);
