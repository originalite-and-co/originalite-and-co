import React from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

PurchaseHistory.propTypes = {
  orders: PropTypes.array.isRequired
};

const useStyles = makeStyles(generateStyles);

function PurchaseHistory({ orders }) {
  const classes = useStyles();

  if (!orders.length) {
    return (
      <Typography component="h3" variant="body1">
        No Purchases were found
      </Typography>
    );
  }

  const ordersArray = orders.map((order) => order.products);
  const productsArray = ordersArray.map(
    (orderProduct) => orderProduct[0].product
  );
  const productsList = productsArray.map((product) => (
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
          Total price ${product.currentPrice} USD
        </p>
      </Box>
    </ListItem>
  ));

  return (
    <>
      <List data-testid="purchase-history-list">{productsList}</List>
    </>
  );
}

function generateStyles({ breakpoints }) {
  return {
    purchaseItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '5px',
      borderBottom: '1px solid #847A7A',
      position: 'relative',
      paddingLeft: '0px !important',
      paddingTop: '15px !important',

      [breakpoints.up('desktop')]: {
        marginTop: '25px',
        paddingBottom: '15px'
      }
    },
    purchaseItemdate: {
      position: 'absolute',
      left: '0',
      top: '0',
      fontFamily: 'Open Sans',
      fontSize: '10px',
      lineHeight: '14px',
      color: '#000000',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: '300',
        top: '-15px'
      }
    },
    itemInfoBlock: {
      marginLeft: '20px'
    },
    purchaseItemImg: {
      height: '97px',
      [breakpoints.up('desktop')]: {
        height: '174px'
      }
    },
    purchaseItemTitle: {
      textTransform: 'capitalize',
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#000000',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        paddingBottom: '9px'
      }
    },
    purchaseItemAddInfo: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#847A7A',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: '300'
      }
    }
  };
}

export default PurchaseHistory;
