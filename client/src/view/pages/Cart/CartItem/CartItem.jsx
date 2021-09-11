import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Input,
  Typography
} from '@material-ui/core';
import { Add, Close, Remove } from '@material-ui/icons';
import generateStyles from './styles';

import { useDispatch } from 'react-redux';
import { cartOperations } from '../../../../redux/features/cart';

import _ from 'lodash';
import { Link } from 'react-router-dom';

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  itemNo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cartQuantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string.isRequired,
  enabled: PropTypes.bool
};

function CartItem({
  isDesktop,
  id,
  itemNo,
  cartQuantity,
  color,
  maxQuantity,
  currentPrice,
  name,
  imageUrls,
  size,
  enabled
}) {
  const [quantity, setQuantity] = useState({
    isValid: true,
    value: cartQuantity
  });
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const dispatch = useDispatch();

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    setQuantity({ isValid: true, value: cartQuantity });
  }, [cartQuantity]);

  useEffect(() => {}, [quantity]);

  const handleCloseBtnClick = () => {
    dispatch(cartOperations.deleteProductFromCart(id, size));
  };

  const handleChange = ({ target }) => {
    const { value } = target;

    if (value < 1 || value > maxQuantity) {
      setError(`Please enter a number between 1 and ${maxQuantity}`);
      return setQuantity({ isValid: false, value: Number(value) });
    }
    dispatch(
      cartOperations.changeProductQuantity(id, itemNo, size, value)
      // eslint-disable-next-line no-console
    ).catch((error) => console.error(error));
    setError('');
    setQuantity({ isValid: true, value: Number(value) });
  };

  const handleRemoveBtnClick = () => {
    if (Number(quantity.value) <= 1) {
      return;
    }
    dispatch(
      cartOperations.decreaseProductQuantity(id.toString(), size.toString())
    );
    setQuantity((prevState) => ({
      ...prevState,
      value: (prevState.value -= 1)
    }));
  };

  const handleAddBtnClick = () => {
    if (Number(quantity.value) >= Number(maxQuantity)) {
      return;
    }
    dispatch(
      cartOperations.addProductToCart(id.toString(), itemNo, size.toString())
    );
    setQuantity((prevState) => ({
      ...prevState,
      value: (prevState.value += 1)
    }));
  };

  const handleItemClick = () => {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem('recentlyViewed')
    );
    if (dataFromLocalStorage?.length === 10) {
      dataFromLocalStorage.shift();
    }
    const product = {
      enabled,
      id,
      itemNo,
      cartQuantity,
      color,
      maxQuantity,
      currentPrice,
      name,
      imageUrls,
      size
    };
    let data = [product];
    if (Array.isArray(dataFromLocalStorage)) {
      dataFromLocalStorage.some((item) => item.itemNo === product.itemNo)
        ? (data = [...dataFromLocalStorage])
        : (data = [...dataFromLocalStorage, product]);
    }
    localStorage.setItem('recentlyViewed', JSON.stringify(data));
  };

  return (
    <Grid item component="li" className={classes.root} xs={12}>
      <IconButton
        onClick={handleCloseBtnClick}
        className={classes.closeBtn}
        color="primary"
      >
        <Close />
      </IconButton>
      <Grid className={classes.inner} container>
        <Grid
          item
          xs={isDesktop ? 2 : 5}
          component="figure"
          className={classes.picture}
        >
          <Link onClick={handleItemClick} to={`/products/${itemNo}`}>
            <img src={imageUrls[0]} alt={name} />
          </Link>
        </Grid>
        <Grid item xs={isDesktop ? 9 : 6} className={classes.description}>
          <Typography
            component="h3"
            variant="body1"
            color="textSecondary"
            className={classes.heading}
          >
            {_.upperFirst(name)}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="inherit"
            className={classes.itemNumber}
          >
            {itemNo}
          </Typography>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Price:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              ${Number(currentPrice).toFixed(2)}
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Color:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              {_.upperFirst(color)}
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Size:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              {size.toUpperCase()}
            </Typography>
          </Box>
          <Box className={`${classes.counterWrapper} ${classes.text}`}>
            <Typography variant="body2" color="inherit" component="span">
              Quantity:
            </Typography>
            <Box className={classes.counter}>
              <IconButton
                disabled={Number(quantity.value) <= 1}
                onClick={handleRemoveBtnClick}
                size="small"
                className={`${classes.counterBtn} ${classes.removeBtn}`}
                color="primary"
              >
                <Remove
                  className={`${classes.counterIcon} ${classes.removeIcon}`}
                />
              </IconButton>
              <Input
                inputProps={{
                  minLength: 1,
                  maxLength: 4,
                  min: 1,
                  max: maxQuantity
                }}
                className={classes.counterValue}
                value={quantity.value}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                type="number"
                required
              />
              <IconButton
                disabled={Number(quantity.value) >= Number(maxQuantity)}
                onClick={handleAddBtnClick}
                size="small"
                className={`${classes.counterBtn} ${classes.addBtn}`}
                color="primary"
              >
                <Add className={`${classes.counterIcon} ${classes.addIcon}`} />
              </IconButton>
              {maxQuantity === 1 && (
                <Typography
                  component="span"
                  variant="body2"
                  noWrap
                  display="block"
                  className={classes.counterInfo}
                >
                  Last item
                </Typography>
              )}
            </Box>
          </Box>
          <Box className={`${classes.text} ${classes.total}`}>
            <Typography variant="body2" color="textSecondary" component="span">
              Total:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              $
              {quantity.isValid
                ? Number(currentPrice * quantity.value).toFixed(2)
                : Number(currentPrice * 1).toFixed(2)}
            </Typography>
          </Box>
          {touched && error && (
            <Typography
              color="error"
              component="span"
              variant="body2"
              className={classes.counterError}
            >
              {error}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth" />
    </Grid>
  );
}

export default CartItem;
