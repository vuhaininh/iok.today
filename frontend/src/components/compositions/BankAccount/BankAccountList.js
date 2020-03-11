import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
const generateBankAccounts = (own, t) => {
  const { bankAccount } = own;
  return bankAccount.edges.map(({ node }) => {
    const { accountNumber, bankName, branch, owner } = node;
    return (
      <Box>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="caption"
          display="block"
        >
          {`${t('company.account-number')}: ${accountNumber}`}
        </Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="caption"
          display="block"
        >
          {`${t('company.bank-name')}: ${bankName}`}
        </Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="caption"
          display="block"
        >
          {`${t('company.branch')}: ${branch}`}
        </Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="caption"
          display="block"
        >
          {`${t('company.owner')}: ${owner}`}
        </Typography>
        ---
      </Box>
    );
  });
};
class BankAccountList extends Component {
  render() {
    const { t, own } = this.props;

    return (
      <Box>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="body1"
        >
          {`${t('company.bank-accounts')}: `}
        </Typography>
        {generateBankAccounts(own, t)}
      </Box>
    );
  }
}

export default withTranslation()(BankAccountList);
