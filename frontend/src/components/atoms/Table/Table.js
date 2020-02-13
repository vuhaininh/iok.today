import React from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'material-table';
import { TableIcons } from './TableIcons';
export default props => {
  const { t } = useTranslation();

  const options = {
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showTitle: false,
    sorting: true,
  };
  const localization = {
    toolbar: {
      searchTooltip: t('table.search'),
      searchPlaceholder: t('table.search'),
    },
    pagination: {
      labelRowsSelect: t('table.rows'),
      firstTooltip: t('table.first-page'),
      firstAriaLabel: t('table.first-page'),
      previousAriaLabel: t('table.previous-page'),
      previousTooltip: t('table.previous-page'),
      nextAriaLabel: t('table.next-page'),
      nextTooltip: t('table.next-page'),
      lastAriaLabel: t('table.last-page'),
      lastTooltip: t('table.last-page'),
    },
  };
  return (
    <MaterialTable
      options={options}
      localization={localization}
      icons={TableIcons}
      {...props}
    />
  );
};
