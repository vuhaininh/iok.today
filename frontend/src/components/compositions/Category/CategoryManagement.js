import React from 'react';
import CategoryListRender from './CategoryListRender';
import CreateCategory from './CreateCategory';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { getUser, hasRoles } from '../../../utils';

const CategoryManagement = props => {
  const user = JSON.parse(getUser());

  const canCreate = hasRoles(user, [
    'accountant',
    'admin',
    'director',
  ]);
  return (
    <Box>
      {canCreate ? <CreateCategory /> : null}
      <Divider />

      <CategoryListRender />
    </Box>
  );
};

export default CategoryManagement;
