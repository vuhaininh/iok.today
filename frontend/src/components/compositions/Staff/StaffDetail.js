import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Typography } from '@material-ui/core';
import { dateFormat } from '../../../utils/Formatter';
import { withTranslation } from 'react-i18next';
class StaffDetail extends Component {
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
    const { t } = this.props;
    return (
      <Box className="ml3 mb3 mr2">
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
