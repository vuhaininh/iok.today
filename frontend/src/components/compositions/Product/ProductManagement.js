import React from 'react';
import ProductListRender from './ProductListRender';
import CreateProduct from './CreateProduct';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const ProductManagement = props => {
  return (
    <Box>
      <CreateProduct />     
      <Divider />
      <ProductListRender />
    </Box>
  );
};

export default ProductManagement;
