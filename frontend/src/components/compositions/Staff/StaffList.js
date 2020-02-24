import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Table } from '../../atoms/Table';
import { dateFormat } from '../../../utils/Formatter';
import { withTranslation } from 'react-i18next';

const getData = profiles => {
  return profiles.edges.map(({ node }) => {
    const {
      id,
      firstName,
      lastName,
      position,
      dob,
      mobile,
      address,
      liability,
      liabilityLimit,
    } = node;
    let color = '#fff';
    const percent = (liability * 100) / liabilityLimit;
    if (percent <= 60) color = 'success';
    else if (percent <= 80) color = 'warning';
    else color = 'error';

    return {
      id,
      name: `${lastName} ${firstName}`,
      position,
      dob,
      mobile,
      address,
      liability: {
        value: liability,
        color,
      },
      liabilityLimit,
    };
  });
};

class StaffList extends Component {
  state = {};
  render() {
    const { staffProfiles, t } = this.props;
    const columns = [
      {
        title: t('staff.full-name'),
        field: 'name',
      },
      {
        title: t('staff.mobile'),
        field: 'mobile',
      },
      {
        title: t('staff.liability'),
        field: 'liability',
        render: rowData => (
          <span className={rowData.liability.color}>
            {rowData.liability.value.toLocaleString()}
          </span>
        ),
      },
      {
        title: t('staff.liability-limit'),
        field: 'liabilityLimit',
        render: rowData => rowData.liabilityLimit.toLocaleString(),
      },
    ];

    return (
      <Box>
        <Table columns={columns} data={getData(staffProfiles)} />
      </Box>
    );
  }
}

export default withTranslation()(StaffList);
