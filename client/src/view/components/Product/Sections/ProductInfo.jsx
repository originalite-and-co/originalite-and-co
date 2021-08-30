import React, { useEffect, useState } from 'react';
import OneProductStyles from '../Product.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistOperations } from '../../../../redux/features/wishlist';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { authorizationSelectors } from '../../../../redux/features/authorization';
import Toast from '../../Toast/Toast';
import { cartOperations } from '../../../../redux/features/cart';
import { useHistory } from 'react-router-dom';

function ProductInfo({ availableSizes, detail, wishlistIDs }) {
  // const [isActiveColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [addedToWishlist, setAddedToWishlist] = useState();
  const [authorizeToaster, setAuthorizeToaster] = useState();
  const dispatch = useDispatch();
  const { sizes, name, currentPrice, itemNo, color, description, _id } = detail;

  const isInWishlist = wishlistIDs.some((id) => id === _id);
  const isAuthorized = useSelector(authorizationSelectors.authorization);

  const history = useHistory();

  useEffect(() => {
    setAddedToWishlist(isInWishlist);
  }, [isAuthorized]);

  useEffect(() => {
    isInWishlist ? setAddedToWishlist(true) : setAddedToWishlist(false);
  }, []);

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

  const handleAddToCartBtnClick = (event) => {
    dispatch(cartOperations.addProductToCart(_id, itemNo, activeSize));
  };

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
      {/*<div className={OneProductStyles.color}>*/}
      {/*    {*/}
      {/*        color && color.map((item, index) => (*/}
      {/*            <>*/}
      {/*                <button*/}
      {/*                    type='radio'*/}
      {/*                    key={`${item}_${index}`}*/}
      {/*                    style={{background: item}}*/}
      {/*                    className={isActiveColor === index ? OneProductStyles.active : ''}*/}
      {/*                    onClick={() => onSelectColor(index)}>*/}
      {/*                </button>*/}
      {/*            </>*/}

      {/*            )*/}
      {/*        )*/}
      {/*    }*/}
      {/*</div>*/}
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
    </div>
  );
}

export default ProductInfo;
