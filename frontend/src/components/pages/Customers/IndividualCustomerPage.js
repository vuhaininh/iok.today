import React from 'react';
import { TabPage } from '../../atoms/Tabs';

import { withRouter } from 'found';
import { useTranslation } from 'react-i18next';
import { IndividualManagement } from '../../compositions/Customer';
const IndividualCustomerPage = props => {
  const { t } = useTranslation();
  const tabItems = [
    {
      label: t('customers.individual-list'),
      component: <IndividualManagement />,
    },
  ];

  return <TabPage items={tabItems} className="ml3 mb3 mr2" />;
};
export default withRouter(IndividualCustomerPage);
