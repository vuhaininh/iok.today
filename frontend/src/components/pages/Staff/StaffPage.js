import React from 'react';
import { StaffManagement } from '../../compositions/Staff';
import { withRouter } from 'found';
const StaffPage = props => {
  return <StaffManagement />;
};

export default withRouter(StaffPage);
