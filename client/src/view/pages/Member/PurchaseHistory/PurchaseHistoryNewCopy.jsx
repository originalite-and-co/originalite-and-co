import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';
import { Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

PurchaseHistoryNew.propTypes = {
  orders: PropTypes.array.isRequired
};

function PurchaseHistoryNew({ orders }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let productsList;
  const areThereAnyProducts =
    orders !== null && orders !== undefined && orders.length >= 1;

  areThereAnyProducts
    ? (productsList = orders.map((order) => {
        const { address, city, country, postal } = order.deliveryAddress;
        const { firstName, lastName } = order.customerId;
        const products = order.products;

        const purchasedProductsImgs = products.map((productItem) => {
          const { product } = productItem;
          return (
            <div key={product._id}>
              <img
                className={classes.purchaseItemImg}
                src={product.imageUrls[0]}
                alt=""
              />
            </div>
          );
        });

        const purchasedProducts = products.map((productItem) => {
          // console.log(productItem, 'hey');
          const { product, cartQuantity } = productItem;
          // console.log(product, cartQuantity, 'info');
          return (
            <div key={product._id} className={classes.expandedBlock}>
              <Box className={classes.expandedImg}>
                <img
                  className={classes.purchaseItemImg}
                  src={product.imageUrls[0]}
                  alt=""
                />
              </Box>
              <Box className={classes.expandedInfo}>
                <Box>
                  <p className={classes.purchaseItemAddInfo}>{product.name}</p>
                </Box>
                <Box className={classes.expandedPriceQuantity}>
                  <p className={classes.purchaseItemAddInfo}>
                    Price - {product.currentPrice}
                  </p>
                  <Box style={{ marginLeft: '15px' }}>
                    <p className={classes.purchaseItemAddInfo}>
                      Quantity - {cartQuantity}
                    </p>
                  </Box>
                </Box>
              </Box>
            </div>
          );
        });
        return (
          <>
            <Card className={classes.card} key={order._id}>
              <CardContent className={classes.cardInnerWrapper} component="div">
                <Box>
                  <Box className={classes.infoBlock}>
                    <p className={classes.secondaryTheme}>
                      № {order.orderNo} from {order.date.split('T')[0]}
                    </p>
                    <p className={classes.purchaseItemAddInfo}>
                      {order.status}
                    </p>
                  </Box>
                  <p className={classes.secondaryTheme}>
                    Total sum ${order.totalSum} USD
                  </p>
                  <Box className={classes.imgsWrapper}>
                    {purchasedProductsImgs}
                  </Box>
                </Box>
              </CardContent>
              <CardActions disableSpacing className={classes.test}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardInnerWrapper}>
                  <Box className={classes.infoBlock}>
                    <p className={classes.heading}>Delivery info</p>
                    <p className={classes.secondaryTheme}>
                      {country}, {city}, {address}, {postal}
                    </p>
                  </Box>
                  <Box className={classes.infoBlock}>
                    <p className={classes.heading}>Customer info</p>
                    <p className={classes.secondaryTheme}>
                      {firstName} {lastName}
                    </p>
                    <p>
                      <p className={classes.secondaryTheme}>{order.mobile}</p>
                      <p className={classes.secondaryTheme}>{order.email}</p>
                    </p>
                  </Box>
                  <Box className={classes.infoBlock}>{purchasedProducts}</Box>
                </CardContent>
              </Collapse>
            </Card>
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
