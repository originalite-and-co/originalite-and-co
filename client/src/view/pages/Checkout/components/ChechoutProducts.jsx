import React from 'react';
import Image from '../../../components/Image';

import { Box, Typography } from '@material-ui/core';

function CheckoutProduct({ brand, currentPrice, name, cartQuantity, image }) {
  return (
    <Box className="checkoutProductItem">
      <Box className="cardImageWrapper">
        <Image src={image} className="cardImage" />
      </Box>
      <Box className="cardContent">
        <Box className="cardHeader">
          <Typography component="h4" className="cardTitle">
            {brand}
          </Typography>
          <Typography component="h3" className="cardSubTitle">
            {name}
          </Typography>
        </Box>
        <Typography component="p" className="cardText">
          {`${currentPrice * cartQuantity} / ${cartQuantity}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CheckoutProduct;
