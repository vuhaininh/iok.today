import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Typography } from '@material-ui/core';
import { dateFormat } from '../../../utils/Formatter';
import { withTranslation } from 'react-i18next';
class IndividualDetail extends Component {
  render() {
    const {
      firstName,
      lastName,
      position,
      dob,
      mobile,
      address,
      email,
    } = this.props.individualCustomerProfile;
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
              {`${t('customers.position')}: ${position}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('customers.dob')}: ${dateFormat(
                dob,
                'dd/mm/yyyy',
              )}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('customers.address')}: ${address}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('customers.mobile')}: ${mobile}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('customers.email')}: ${email}`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withTranslation()(IndividualDetail);
