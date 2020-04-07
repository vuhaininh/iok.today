import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { getLiabilityColor } from '../../../utils/Formatter';
import { Table } from '../../atoms/Table';
import { withTranslation } from 'react-i18next';
import { Visibility } from '@material-ui/icons';
import { withRouter } from 'found';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import CreateStaff from './CreateStaff';
import { getUser, hasRoles } from '../../../utils';
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
  state = { right: false };
  _toggleDrawer(side, open) {
    this.setState({ ...this.state, [side]: open });
  }
  render() {
    const { staffProfiles, t } = this.props;
    const user = JSON.parse(getUser());

    const canCreate = hasRoles(user, [
      'accountant',
      'admin',
      'director',
    ]);
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
        {canCreate ? (
          <div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              size="medium"
              className="mb3"
              onClick={() => this._toggleDrawer('right', true)}
            >
              {t('key-code.add-new')}
            </Button>
            <Drawer
              anchor="right"
              open={this.state.right}
              onClose={() => this._toggleDrawer('right', false)}
            >
              <CreateStaff
                toggleDrawer={this._toggleDrawer.bind(this)}
              />
            </Drawer>
          </div>
        ) : null}

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
