import React from 'react';
import CategoryListRender from './CategoryListRender';
import CreateCategory from './CreateCategory';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const CategoryManagement = props => {
  return (
    <Box>
      <CreateCategory />

      <Divider />

      <CategoryListRender />
    </Box>
  );
};

export default CategoryManagement;
