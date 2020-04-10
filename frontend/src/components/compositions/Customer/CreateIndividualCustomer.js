import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { ErrorPopup } from '../../atoms/ErrorPopup';
import { AppContext } from '../../../contexts/AppContext';
import { withTranslation } from 'react-i18next';

class CreateIndividualCustomer extends Component {
  state = {};
  render() {
    const { t, toggleDrawer } = this.props;
    return (
      <Box className="ma3">
        <ErrorPopup
          isOpen={this.context.openErrorPopup}
          handleClose={() => {
            this.context.toggleErrorPopup(false);
            this.forceUpdate();
          }}
          message={this.context.errorMessage}
        />
        <Typography
          gutterBottom
          color="primary"
          variant="h6"
          display="block"
        >
          {`${t('customers.add-new')}`}
        </Typography>
        Create Individual
      </Box>
    );
  }
}
CreateIndividualCustomer.contextType = AppContext;
export default withTranslation()(CreateIndividualCustomer);
