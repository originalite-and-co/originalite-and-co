import React from 'react';
import PropTypes from 'prop-types';
import { Box, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';

PurchaseHistory.propTypes = {
  orders: PropTypes.array.isRequired
};

function PurchaseHistory({ orders }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const ordersArray = orders.map((order) => order.products);
  const productsArray = ordersArray.map(
    (orderProduct) => orderProduct[0].product
  );

  let productsList;
  orders !== null && orders !== undefined && orders.length >= 1
    ? (productsList = productsArray.map((product) => (
        <ListItem
          key={Math.floor(Math.random() * 100000)}
          className={classes.purchaseItem}
        >
          <Box>
            <img
              className={classes.purchaseItemImg}
              src={product.imageUrls[0]}
              alt="purchased item"
            />
          </Box>
          <Box className={classes.itemInfoBlock}>
            <p className={classes.purchaseItemdate}>
              {product.date.replace('-', '/').split('T')[0].replace('-', '/')}
            </p>
            <p className={classes.purchaseItemTitle}>{product.name}</p>
            <p className={classes.purchaseItemAddInfo}>Size {product.size}</p>
            <p className={classes.purchaseItemAddInfo}>Color {product.color}</p>
            <p className={classes.purchaseItemAddInfo}>
              Total price ${product.totalSum} USD
            </p>
          </Box>
        </ListItem>
      )))
    : (productsList = (
        <Typography
          style={{ textAlign: 'center' }}
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          Your purchase history is empty
        </Typography>
      ));

  return (
    <>
      <Box data-testid="purchase-history-list">{productsList}</Box>
    </>
  );
}

export default PurchaseHistory;
