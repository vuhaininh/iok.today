import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'found';
import Box from '@material-ui/core/Box';
import { ChangePassword } from '../../compositions/Settings';
import { Grid } from '@material-ui/core';
class SettingsPage extends Component {
  state = {};
  render() {
    return (
      <Box className="ml3 mb3 mr2">
        <Grid container>
          <Grid item md={5} xs={12}>
            <ChangePassword />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withTranslation()(withRouter(SettingsPage));
