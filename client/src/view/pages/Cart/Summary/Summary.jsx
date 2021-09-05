import React from 'react';

import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';
import { Link } from 'react-router-dom';

Summary.propTypes = {};

function Summary({ products }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const orderValue = products.reduce((sum, cartItem) => {
    const { currentPrice, cartQuantity } = cartItem;
    return (Number(sum) + Number(currentPrice) * Number(cartQuantity)).toFixed(
      2
    );
  }, 0);

  const deliveryValue = 0;

  const total = Number(orderValue + deliveryValue).toFixed(2);

  return (
    <Box className={classes.summary}>
      <Typography
        className={classes.summaryHeading}
        component="h3"
        variant="body1"
        color="textSecondary"
      >
        Summary
      </Typography>
      <Box>
        <Box className={classes.summaryContent}>
          <Typography component="p" variant="body1" color="textSecondary">
            Order value:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            ${orderValue}
          </Typography>
        </Box>
        <Box className={classes.summaryContent}>
          <Typography component="p" variant="body1" color="textSecondary">
            Delivery:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            {deliveryValue === 0 ? 'FREE' : deliveryValue}
          </Typography>
        </Box>
        <Box className={`${classes.summaryContent} ${classes.summaryTotal}`}>
          <Typography component="p" variant="body1" color="textSecondary">
            Total:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            ${total}
          </Typography>
        </Box>
        <Button
          component={Link}
          to="/checkout"
          size="large"
          variant="contained"
          color="primary"
          className={classes.checkoutBtn}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default Summary;
