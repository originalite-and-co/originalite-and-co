import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import generateStyles from './styles';

ChosenProductInfo.propTypes = {
  sizes: PropTypes.exact({
    img: PropTypes.number,
    description: PropTypes.number
  }).isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.string,
    quantity: PropTypes.string
  }).isRequired,
  className: PropTypes.string,
  isListItem: PropTypes.bool
};

function ChosenProductInfo({ sizes, product, className, isListItem }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  return (
    <Grid
      component={isListItem ? 'li' : 'div'}
      container
      justifyContent="space-between"
      className={`${classes.content} ${className}`}
      wrap="nowrap"
    >
      <Grid xs={sizes.img} item component="figure" className={classes.image}>
        <img src={product.image} alt={product.name} />
      </Grid>
      <Grid xs={sizes.description} className={classes.description} item>
        <Typography
          className={classes.productName}
          component="p"
          variant="body1"
          color="textSecondary"
        >
          {_.upperFirst(product.name)}
        </Typography>
        <Typography
          className={classes.productInfo}
          component="p"
          variant="body2"
        >
          Size: {product.size.toUpperCase()}
        </Typography>
        {product.color && (
          <Typography
            className={classes.productInfo}
            component="p"
            variant="body2"
          >
            Color: {_.upperFirst(product.color)}
          </Typography>
        )}
        {product.quantity && (
          <Typography
            className={classes.productInfo}
            component="p"
            variant="body2"
          >
            Quantity: {_.upperFirst(product.quantity.toString())}
          </Typography>
        )}
        <Box className={classes.productPrice}>
          <Typography component="p" variant="body2">
            Price:
          </Typography>
          <Typography component="p" variant="body2" color="textSecondary">
            ${Number(product.price).toFixed(2)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChosenProductInfo;
