import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { HeaderHome } from '../../compositions/Header';
import './Home.scss';
import { SideNavigation } from '../../compositions/SideNavigation';
import Box from '@material-ui/core/Box';
export default props => {
  return (
    <div>
      <HeaderHome />
      <EuiFlexGroup columns={2} direction="row" gutterSize="none">
        <EuiFlexItem grow={2}>
          <SideNavigation />
        </EuiFlexItem>
        <EuiFlexItem grow={8}>
          <Box mt={1}>{props.children}</Box>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};
