import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';
import { Box, Typography } from '@material-ui/core';
import PurchaseItem from './PurchaseItem';

PurchaseHistoryNew.propTypes = {
  orders: PropTypes.array.isRequired
};

function PurchaseHistoryNew({ orders }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  let productsList;
  const areThereAnyProducts =
    orders !== null && orders !== undefined && orders.length >= 1;

  areThereAnyProducts
    ? (productsList = orders.map((order) => {
        return <PurchaseItem order={order} />;
      }))
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

  return <Box data-testid="purchase-history-list">{productsList}</Box>;
}

export default PurchaseHistoryNew;
