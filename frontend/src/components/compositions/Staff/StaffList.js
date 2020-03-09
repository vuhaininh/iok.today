import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { getLiabilityColor } from '../../../utils/Formatter';
import { Table } from '../../atoms/Table';
import { withTranslation } from 'react-i18next';
import { Visibility } from '@material-ui/icons';
import { withRouter } from 'found';
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
    const color = getLiabilityColor(liability, liabilityLimit);

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
        title: t('staff.position'),
        field: 'position',
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
      <Box className="ml3 mb3 mr2">
        <Table
          columns={columns}
          data={getData(staffProfiles)}
          ActionsColumnIndex={-1}
          actions={[
            {
              icon: () => <Visibility />,
              tooltip: t('staff.view-detail'),
              onClick: (event, rowData) => {
                this.props.router.replace(`/staff/${rowData.id}`);
              },
            },
          ]}
        />
      </Box>
    );
  }
}

export default withTranslation()(withRouter(StaffList));
