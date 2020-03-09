import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Visibility } from '@material-ui/icons';
import { withTranslation } from 'react-i18next';
import { Table } from '../../atoms/Table';
import { withRouter } from 'found';
import { dateFormat } from '../../../utils/Formatter';

const getData = profiles => {
  return profiles.edges.map(({ node }) => {
    const {
      id,
      own,
      name,
      address,
      taxCode,
      liability,
      liabilityLimit,
    } = node;

    return {
      id,
      name,
      address,
      code: own.code,
      taxCode,
      liability,
      liabilityLimit,
    };
  });
};

class CompanyList extends Component {
  render() {
    const { companyCustomerProfiles, t } = this.props;
    const columns = [
      {
        title: t('company.code'),
        field: 'code',
      },
      {
        title: t('company.name'),
        field: 'name',
      },
      {
        title: t('company.address'),
        field: 'address',
      },
      {
        title: t('company.tax-code'),
        field: 'taxCode',
      },
      {
        title: t('company.liability'),
        field: 'liability',
      },
    ];
    return (
      <Box>
        <Table
          columns={columns}
          data={getData(companyCustomerProfiles)}
          ActionsColumnIndex={-1}
          actions={[
            {
              icon: () => <Visibility />,
              tooltip: t('staff.view-detail'),
              onClick: (event, rowData) => {
                this.props.router.replace(
                  `/ccustomers/${rowData.id}`,
                );
              },
            },
          ]}
        />
      </Box>
    );
  }
}

export default withTranslation()(withRouter(CompanyList));
