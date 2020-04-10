import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Visibility } from '@material-ui/icons';
import { withTranslation } from 'react-i18next';
import { Table } from '../../atoms/Table';
import { withRouter } from 'found';
import { dateFormat } from '../../../utils/Formatter';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import CreateIndividualCustomer from './CreateIndividualCustomer';
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
      email,
      own,
    } = node;

    return {
      id,
      name: `${lastName} ${firstName}`,
      position,
      dob,
      mobile,
      address,
      email,
      code: own.code,
    };
  });
};

class IndividualList extends Component {
  state = { right: false };
  _toggleDrawer(side, open) {
    this.setState({ ...this.state, [side]: open });
  }
  render() {
    const { individualCustomerProfiles, t } = this.props;
    const user = JSON.parse(getUser());

    const canCreate = hasRoles(user, [
      'accountant',
      'admin',
      'director',
    ]);

    const columns = [
      {
        title: t('customers.code'),
        field: 'code',
      },
      {
        title: t('customers.full-name'),
        field: 'name',
      },
      {
        title: t('customers.position'),
        field: 'position',
      },
      {
        title: t('customers.mobile'),
        field: 'mobile',
      },
      {
        title: t('customers.email'),
        field: 'email',
      },
      {
        title: t('customers.dob'),
        field: 'dob',
        render: rowData => dateFormat(rowData.dob, 'dd/mm/yyyy'),
      },
    ];
    return (
      <Box>
        {canCreate ? (
          <div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              size="medium"
              className="mb3 mt3"
              onClick={() => this._toggleDrawer('right', true)}
            >
              {t('key-code.add-new')}
            </Button>
            <Drawer
              anchor="right"
              open={this.state.right}
              onClose={() => this._toggleDrawer('right', false)}
            >
              <CreateIndividualCustomer
                toggleDrawer={this._toggleDrawer.bind(this)}
              />
            </Drawer>
          </div>
        ) : null}
        <Table
          columns={columns}
          data={getData(individualCustomerProfiles)}
          ActionsColumnIndex={-1}
          actions={[
            {
              icon: () => <Visibility />,
              tooltip: t('staff.view-detail'),
              onClick: (event, rowData) => {
                this.props.router.replace(
                  `/icustomers/${rowData.id}`,
                );
              },
            },
          ]}
        />
      </Box>
    );
  }
}

export default withTranslation()(withRouter(IndividualList));
