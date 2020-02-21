import React from 'react';
import ProductListRender from './ProductListRender';
import CreateProduct from './CreateProduct';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { getUser, hasRoles } from '../../../utils';

const ProductManagement = props => {
  const user = JSON.parse(getUser());

  const canCreate = hasRoles(user, [
    'accountant',
    'admin',
    'director',
  ]);

  return (
    <Box>
      {canCreate ? <CreateProduct /> : null}
      <Divider />
      <ProductListRender />
    </Box>
  );
};

export default ProductManagement;
