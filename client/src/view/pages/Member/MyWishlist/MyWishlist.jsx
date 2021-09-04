import React, { useEffect, useMemo, useState } from 'react';

import Button from '../../../components/Button/Button';
import SizeDialog from '../SizeDialog/SizeDialog';
import CartNotification from '../../../components/CartNotification/CartNotification';

import useWindowSize from '../../../hooks/useWindowSize';
import constants from '../../../constants';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { wishlistOperations } from '../../../../redux/features/wishlist';
import { cartOperations } from '../../../../redux/features/cart';

import { Box, Typography } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';

MyWishlist.propTypes = {
  wishlist: PropTypes.object.isRequired
};

function MyWishlist({ wishlist }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [chosenSize, setChosenSize] = useState('');

  const { width } = useWindowSize();

  const [isDesktop, setIsDesktop] = useState(
    width >= constants.WINDOW_DESKTOP_SIZE
  );

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const duration = 6000;

  const handleDialogClose = (product, size) => {
    if (size === null) return setIsDialogOpen(false);

    setChosenSize(size);
    const { _id, itemNo } = product;
    dispatch(cartOperations.addProductToCart(_id, itemNo, size));
    setIsDialogOpen(false);
    setShowCartNotification(true);
  };

  const sizeDialog = useMemo(
    () => (
      <SizeDialog
        isOpen={isDialogOpen}
        sizes={availableSizes}
        onClose={(value) => handleDialogClose(activeProduct, value)}
      />
    ),
    [isDialogOpen]
  );

  const cartNotification = useMemo(() => {
    if (!Object.values(activeProduct).length) {
      return;
    }

    return (
      <CartNotification
        autoHideDuration={duration}
        product={{
          image: activeProduct.imageUrls[0],
          name: activeProduct.name,
          size: chosenSize,
          price: activeProduct.currentPrice
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'up'
        }}
        onClose={() => setShowCartNotification(false)}
      />
    );
  }, [showCartNotification]);

  let wishlistList;
  wishlist !== null && wishlist !== undefined
    ? (wishlistList = wishlist.products.map((wish) => {
        const removeFromWishlist = () => {
          dispatch(wishlistOperations.removeFromWishlist(wish._id));
        };

        const handleClick = () => {
          setActiveProduct(wish);
          setAvailableSizes(wish.sizes);
          setIsDialogOpen(true);
        };
        return (
          <Box
            key={Math.floor(Math.random() * 100000)}
            className={classes.purchaseItem}
          >
            <Box className={classes.imageAndInfo}>
              <Box>
                <img
                  className={classes.purchaseItemImg}
                  src={wish.imageUrls[0]}
                  alt="item"
                />
              </Box>
              <Box className={classes.itemInfoBlock}>
                <p className={classes.purchaseItemTitle}>{wish.name}</p>
                <p className={classes.purchaseItemAddInfo}>
                  REF: {wish.itemNo}
                </p>
                <p className={classes.purchaseItemAddInfo}>
                  Color {wish.color}
                </p>
                <p className={classes.purchaseItemAddInfo}>
                  {' '}
                  Price ${wish.currentPrice} USD
                </p>
              </Box>
            </Box>
            <Box className={classes.btnsWrapper}>
              {isDesktop ? (
                <Button
                  color="#FFFFFF"
                  onClick={handleClick}
                  backgroundColor="#000000"
                  text="ADD TO CART"
                  type="button"
                />
              ) : (
                <button className={classes.cartBtn} onClick={handleClick}>
                  add to {<LocalMallIcon />}
                </button>
              )}
              <button
                className={classes.removeBtn}
                onClick={removeFromWishlist}
              >
                remove
              </button>
            </Box>
          </Box>
        );
      }))
    : (wishlistList = (
        <Typography
          style={{ textAlign: 'center' }}
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          Your wishlist is empty
        </Typography>
      ));

  return (
    <Box>
      {wishlistList}
      {sizeDialog}
      {showCartNotification && cartNotification}
    </Box>
  );
}

export default MyWishlist;
