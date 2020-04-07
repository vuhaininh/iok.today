import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Typography } from '@material-ui/core';
import { dateFormat } from '../../../utils/Formatter';
import { withTranslation } from 'react-i18next';
import { getUser, hasRoles } from '../../../utils';
import EditStaffDetail from './EditStaffDetail';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
class StaffDetail extends Component {
  state = { right: false };
  _toggleDrawer(side, open) {
    this.setState({ ...this.state, [side]: open });
  }
  ren;
  render() {
    const {
      firstName,
      lastName,
      position,
      dob,
      mobile,
      address,
      user,
      liability,
      liabilityLimit,
    } = this.props.staffProfile;
    const logUser = JSON.parse(getUser());

    const canEdit = hasRoles(logUser, [
      'accountant',
      'admin',
      'director',
    ]);
    const { t } = this.props;
    return (
      <Box className="ml3 mb3 mr2">
        {canEdit ? (
          <div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              size="medium"
              className="mb3"
              onClick={() => this._toggleDrawer('right', true)}
            >
              {t('key-code.edit')}
            </Button>
            <Drawer
              anchor="right"
              open={this.state.right}
              onClose={() => this._toggleDrawer('right', false)}
            >
              <EditStaffDetail
                toggleDrawer={this._toggleDrawer.bind(this)}
                staffProfile={this.props.staffProfile}
              />
            </Drawer>
          </div>
        ) : null}
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {`${lastName} ${firstName}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('staff.position')}: ${position}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('staff.dob')}: ${dateFormat(dob, 'dd/mm/yyyy')}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('staff.address')}: ${address}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('staff.mobile')}: ${mobile}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('staff.email')}: ${user.email}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t(
                'staff.liability',
              )}: ${liability.toLocaleString()}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t(
                'staff.liability-limit',
              )}: ${liabilityLimit.toLocaleString()}`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withTranslation()(StaffDetail);
