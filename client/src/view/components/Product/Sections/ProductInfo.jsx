import React, { useEffect, useMemo, useState } from 'react';

import CartNotification from '../../CartNotification/CartNotification';
import Toast from '../../Toast/Toast';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import OneProductStyles from '../Product.module.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useDispatch, useSelector } from 'react-redux';
import { wishlistOperations } from '../../../../redux/features/wishlist';
import { authorizationSelectors } from '../../../../redux/features/authorization';

import { cartOperations } from '../../../../redux/features/cart';
import { NavLink, useHistory } from 'react-router-dom';
import _ from 'lodash';
import { productRequests } from '../../../../api/server';

function ProductInfo({
  activeProductNumber,
  colors,
  availableSizes,
  detail,
  wishlistIDs
}) {
  const [availableColors, setAvailableColors] = useState([]);
  const [activeSize, setActiveSize] = useState(null);
  const [addedToWishlist, setAddedToWishlist] = useState();
  const [authorizeToaster, setAuthorizeToaster] = useState();
  const [showCartNotification, setShowCartNotification] = useState(false);

  const dispatch = useDispatch();
  const {
    sizes,
    name,
    currentPrice,
    itemNo,
    color,
    description,
    _id,
    imageUrls,
    groupId
  } = detail;

  const isInWishlist = wishlistIDs.some((id) => id === _id);
  const isAuthorized = useSelector(authorizationSelectors.authorization);

  const history = useHistory();

  useEffect(() => {
    setAddedToWishlist(isInWishlist);
  }, [isAuthorized, history.location.pathname]);

  useEffect(() => {
    if (!groupId) {
      const colorObject = colors?.find((item) => item.name === color);
      return setAvailableColors([
        {
          colorName: colorObject.name,
          cssValue: colorObject.cssValue,
          itemNo
        }
      ]);
    }
    productRequests
      .retrieveByQuery(`groupId=${groupId}`)
      .then(({ products }) => {
        setAvailableColors(
          products.map(({ color, itemNo }) => {
            const colorObject = colors.find((item) => item.name === color);
            return {
              colorName: colorObject.name,
              cssValue: colorObject.cssValue,
              itemNo
            };
          })
        );
      });
  }, [groupId, color, history.location.pathname]);

  const onSelectSize = (item) => {
    setActiveSize(item);
  };
  const addToWishlist = () => {
    if (!isAuthorized) {
      setAuthorizeToaster(true);
      setTimeout(() => {
        history.push('/auth/login');
      }, 1500);
      return;
    }
    setAddedToWishlist(true);
    dispatch(wishlistOperations.addToWishlist(_id));
  };
  const removeFromWishlist = () => {
    setAddedToWishlist(false);
    dispatch(wishlistOperations.removeFromWishlist(_id));
  };

  let favIcon;

  addedToWishlist
    ? (favIcon = (
        <FavoriteIcon
          color="secondary"
          fontSize="large"
          onClick={removeFromWishlist}
        />
      ))
    : (favIcon = (
        <FavoriteBorderIcon
          color="secondary"
          fontSize="large"
          onClick={addToWishlist}
        />
      ));

  const duration = 6000;
  const handleAddToCartBtnClick = (event) => {
    setShowCartNotification(true);
    dispatch(cartOperations.addProductToCart(_id, itemNo, activeSize));
  };

  const cartNotification = useMemo(
    () => (
      <CartNotification
        autoHideDuration={duration}
        product={{
          image: imageUrls[0],
          name,
          size: activeSize,
          price: currentPrice
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'up'
        }}
        onClose={() => setShowCartNotification(false)}
      />
    ),
    [showCartNotification]
  );

  const colorList = availableColors?.map(({ itemNo, colorName, cssValue }) => {
    return (
      <Grid
        key={itemNo}
        item
        component="li"
        className={OneProductStyles.colorListItem}
      >
        <NavLink
          className={OneProductStyles.colorLink}
          to={`/products/${itemNo}`}
        >
          <span
            className={OneProductStyles.color}
            style={{ backgroundColor: cssValue }}
          />
          <Typography
            noWrap
            component="p"
            variant="body1"
            className={
              activeProductNumber === itemNo
                ? `${OneProductStyles.colorName} ${OneProductStyles.active}`
                : OneProductStyles.colorName
            }
          >
            {_.lowerCase(colorName)}
          </Typography>
        </NavLink>
      </Grid>
    );
  });

  return (
    <div className={OneProductStyles.info}>
      {authorizeToaster && (
        <Toast
          variant="filled"
          message="Log in to add the item to your wishlist"
          severity="error"
        />
      )}
      <div className={OneProductStyles.row}>
        <h2>{name}</h2>
        <span>{currentPrice} $</span>
      </div>
      <span className={OneProductStyles.itemNo}>{itemNo}</span>
      <h3>Color</h3>
      <div>
        <Grid spacing={2} container component="ul">
          {colorList}
        </Grid>
      </div>
      <h3>Details</h3>
      <div className={OneProductStyles.description}>{description}</div>
      <h3>Size</h3>
      <div>
        <ul className={OneProductStyles.sizes}>
          {availableSizes.map((item, index) => (
            <li
              key={item}
              onClick={() => onSelectSize(item)}
              className={
                !sizes.includes(item)
                  ? OneProductStyles.disabled
                  : '' || activeSize === item
                  ? OneProductStyles.active
                  : ''
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={OneProductStyles.button_addToCart}>
        <Box className={OneProductStyles.buttonsGroup}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddToCartBtnClick}
            disabled={!activeSize}
            className={
              activeSize ? OneProductStyles.active : OneProductStyles.button
            }
          >
            Add to cart
          </Button>
          <Box className={OneProductStyles.favIcon}>{favIcon}</Box>
        </Box>
      </div>
      {showCartNotification && cartNotification}
    </div>
  );
}

export default ProductInfo;
