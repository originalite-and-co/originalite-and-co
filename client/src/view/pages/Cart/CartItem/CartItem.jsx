import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Input,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Add, Close, Remove } from '@material-ui/icons';
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
  const [quantity, setQuantity] = useState(cartQuantity);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const dispatch = useDispatch();

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    setQuantity(cartQuantity);
  }, []);

  useEffect(() => {}, [quantity]);

  const handleCloseBtnClick = (event) => {
    dispatch(cartOperations.deleteProductFromCart(id, size));
  };

  const handleChange = ({ target }) => {
    const { value } = target;

    if (value < 1 || value > maxQuantity) {
      return setError(`Please enter a number between 1 and ${maxQuantity}`);
    }
    setQuantity(Number(value));
  };

  const handleRemoveBtnClick = (event) => {
    if (Number(quantity) <= 1) {
      return;
    }
    dispatch(
      cartOperations.decreaseProductQuantity(id.toString(), size.toString())
    );
    setQuantity((prevState) => (prevState -= 1));
  };

  const handleAddBtnClick = (event) => {
    if (Number(quantity) >= Number(maxQuantity)) {
      return;
    }
    dispatch(
      cartOperations.addProductToCart(id.toString(), itemNo, size.toString())
    );
    setQuantity((prevState) => (prevState += 1));
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
          xs={isDesktop ? 3 : 5}
          component="figure"
          className={classes.picture}
        >
          <Link onCLick={handleItemClick} to={`/products/${itemNo}`}>
            <img src={imageUrls[0]} alt={name} />
          </Link>
        </Grid>
        <Grid item xs={isDesktop ? 8 : 6} className={classes.description}>
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
                disabled={Number(quantity) <= 1}
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
                value={quantity}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                type="number"
                required
              />
              <IconButton
                disabled={Number(quantity) >= Number(maxQuantity)}
                onClick={handleAddBtnClick}
                size="small"
                className={`${classes.counterBtn} ${classes.addBtn}`}
                color="primary"
              >
                <Add className={`${classes.counterIcon} ${classes.addIcon}`} />
              </IconButton>
            </Box>
          </Box>
          <Box className={`${classes.text} ${classes.total}`}>
            <Typography variant="body2" color="textSecondary" component="span">
              Total:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              ${Number(currentPrice * quantity).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth" />
    </Grid>
  );
}

export default CartItem;
