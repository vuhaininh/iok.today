import React from 'react';
import { HeaderHome } from '../../compositions/Header';
import './Home.scss';
import { SideNavigation } from '../../compositions/SideNavigation';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default props => {
  return (
    <div>
      <HeaderHome />
      <Grid container direction="row" justify="center">
        <Grid item xs={3} sm={3}>
          <SideNavigation />
        </Grid>
        <Grid item xs={9} sm={9}>
          <Box mt={1}>{props.children}</Box>
        </Grid>
      </Grid>
    </div>
  );
};
