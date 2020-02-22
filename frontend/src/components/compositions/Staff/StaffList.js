import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
class StaffList extends Component {
  state = {};
  render() {
    const { staffProfiles } = this.props;
    console.log(staffProfiles);

    return <Box>Staff List</Box>;
  }
}

export default StaffList;
