import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Typography
} from '@material-ui/core';
import { CheckCircleOutline, Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

import { useSelector } from 'react-redux';
import { cartSelectors } from '../../../redux/features/cart';

import _ from 'lodash';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import { Link } from 'react-router-dom';

CartNotification.propTypes = {
  autoHideDuration: PropTypes.number,
  anchorOrigin: PropTypes.exact({
    horizontal: PropTypes.oneOf(['center', 'left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'up'])
  }),
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func
};

const DEVICES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  MIN_DESKTOP: 'min-desktop',
  DESKTOP: 'desktop'
};

const getDevice = (width) => {
  const {
    WINDOW_DESKTOP_SIZE,
    WINDOW_MIN_DESKTOP_SIZE,
    WINDOW_TABLET_SIZE,
    WINDOW_MOBILE_SIZE
  } = constants;

  if (width === WINDOW_DESKTOP_SIZE) {
    return DEVICES.DESKTOP;
  } else if (width === WINDOW_MIN_DESKTOP_SIZE) {
    return DEVICES.MIN_DESKTOP;
  } else if (width === WINDOW_TABLET_SIZE) {
    return DEVICES.TABLET;
  } else if (width === WINDOW_MOBILE_SIZE) {
    return DEVICES.MOBILE;
  }
};

function CartNotification({
  autoHideDuration,
  anchorOrigin,
  product,
  onClose
}) {
  const [isOpen, setOpen] = useState(true);
  const { width } = useWindowSize();
  const [device, setDevice] = useState(getDevice(width));

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const cartQuantity = useSelector(cartSelectors.getCartQuantity);

  const handleClose = () => {
    setOpen(false);
    typeof onClose === 'function' && onClose();
  };

  useEffect(() => {
    setDevice(getDevice(width));
  }, [width]);

  const figureSize =
    device === DEVICES.MOBILE
      ? 4
      : device === DEVICES.TABLET && device === DEVICES.MIN_DESKTOP
      ? 3
      : 2;

  const descriptionSize =
    device === DEVICES.MOBILE
      ? 7
      : device === DEVICES.TABLET && device === DEVICES.MIN_DESKTOP
      ? 8
      : 9;

  return (
    <Box className={classes.root}>
      <Snackbar
        className={classes.snackbar}
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={autoHideDuration}
        anchorOrigin={anchorOrigin}
      >
        <Box className={classes.snackbarInner}>
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <Close className={classes.closeIcon} />
          </IconButton>
          <Box className={classes.snackbarTitleWrapper}>
            <CheckCircleOutline
              fontSize="inherit"
              color="inherit"
              className={classes.snackbarTitleIcon}
            />
            <Typography
              className={classes.snackbarTitle}
              component="p"
              variant="body2"
              color="textSecondary"
            >
              Added to Bag
            </Typography>
          </Box>
          <Grid
            container
            justifyContent="space-between"
            className={classes.content}
            wrap="nowrap"
          >
            <Grid
              xs={figureSize}
              item
              component="figure"
              className={classes.image}
            >
              <img src={product.image} alt={product.name} />
            </Grid>
            <Grid xs={descriptionSize} className={classes.description} item>
              <Typography
                className={classes.productName}
                component="p"
                variant="body1"
                color="textSecondary"
              >
                {_.upperFirst(product.name)}
              </Typography>
              <Typography
                className={classes.productSize}
                component="p"
                variant="body2"
              >
                Size: {product.size.toUpperCase()}
              </Typography>
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
          <Button
            component={Link}
            to="/cart"
            variant="outlined"
            color="primary"
            className={classes.btn}
            size="medium"
          >
            View Bag ({cartQuantity})
          </Button>
        </Box>
      </Snackbar>
    </Box>
  );
}

export default CartNotification;
