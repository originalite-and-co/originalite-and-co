import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';
import { Box, Typography } from '@material-ui/core';

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
        const { address, city, country, postal } = order.deliveryAddress;
        const { firstName, lastName } = order.customerId;
        const products = order.products;

        const purchasedProducts = products.map((productItem) => {
          console.log(productItem, 'hey');
          const { product, cartQuantity } = productItem;
          console.log(product, cartQuantity, 'info');
        });
        return (
          <>
            <div key={order._id}>
              <div>
                <h1>general info</h1>
                <br />
                <p>{order.orderNo}</p>
                <p>{order.status}</p>
                <p>{order.date.split('T')[0]}</p>
                <p>${order.totalSum} USD</p>
              </div>
              <div>
                <br />
                <h1>delivery info</h1>
                <br />
                <p>{address}</p>
                <p>{city}</p>
                <p>{country}</p>
                <p>{postal}</p>
              </div>
              <div>
                <br />
                <h1>contact info</h1>
                <br />
                <p>{order.email}</p>
                <p>{order.mobile}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
            </div>
            <hr />
          </>
        );
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
