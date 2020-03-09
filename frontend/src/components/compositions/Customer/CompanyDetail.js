import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Card, CardContent, Typography } from '@material-ui/core';

import { withTranslation } from 'react-i18next';
import { Link } from 'found';

const generateRepresentatives = (representatives, t) => {
  return representatives.edges.map(({ node }) => {
    const { id, firstName, lastName, position } = node;
    const link = `/icustomers/${id}`
    return (
      <Typography gutterBottom color="textSecondary" variant="body2">
        <Link to={link}>{`${lastName} ${firstName} `}</Link>
        {`(${position})`}
      </Typography>
    );
  });
};
class CompanyDetail extends Component {
  render() {
    const {
      id,
      own,
      name,
      address,
      taxCode,
      liability,
      liabilityLimit,
      representatives,
    } = this.props.companyCustomerProfile;
    const { t } = this.props;
    return (
      <Box className="ml3 mb3 mr2">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {`${name}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('company.code')}: ${own.code}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('company.address')}: ${address}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('company.tax-code')}: ${taxCode}`}
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
            >
              {`${t('company.representative')}: `}
            </Typography>
            {generateRepresentatives(representatives, t)}
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withTranslation()(CompanyDetail);
