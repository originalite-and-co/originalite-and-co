import React, { useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import Summary from './Summary/Summary';
import CartItem from './CartItem/CartItem';

import { useDispatch, useSelector } from 'react-redux';
import {
  cartOperations,
  cartSelectors
} from '../../../redux/features/cart/index.js';
import {
  authorizationSelectors,
  authorizeOperations
} from '../../../redux/features/authorization';

import useAsyncError from '../../hooks/useAsyncError';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import { productRequests } from '../../../api/server';

import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

const { WINDOW_DESKTOP_SIZE } = constants;

function Cart() {
  const { width } = useWindowSize();
  const [isDesktop, setDesktop] = useState(width >= WINDOW_DESKTOP_SIZE);
  const [isLoaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const isUserAuthorized = useSelector(authorizationSelectors.authorization);
  const cart = useSelector(cartSelectors.getCart);
  const dispatch = useDispatch();

  const throwAsyncError = useAsyncError();
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    setLoaded(false);
    if (!cart.length) return;

    let itemNumbers = cart.map((item) => item.itemNo);
    itemNumbers = [...new Set(itemNumbers)];
    const asyncFunction = async () => {
      try {
        const response = await productRequests.retrieveProductsByItemNumbers(
          itemNumbers
        );
        setProducts(response);
      } catch (error) {
        throwAsyncError(error);
      }
    };
    asyncFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!products?.length) {
      return;
    }
    const cartProducts = cart.map((cartItem) => {
      const { color, quantity, currentPrice, name, enabled, imageUrls } =
        products?.find(({ itemNo }) => {
          return itemNo === cartItem.itemNo;
        });

      return {
        color,
        quantity,
        currentPrice,
        name,
        enabled,
        imageUrls,
        itemNo: cartItem.itemNo,
        _id: cartItem._id,
        cartQuantity: cartItem.cartQuantity,
        chosenSize: cartItem.chosenSize
      };
    });
    setCartProducts(cartProducts);
  }, [cart, products]);

  useEffect(() => {
    setLoaded(false);
    dispatch(authorizeOperations.authorizeUser());
    dispatch(cartOperations.getCart())
      .then(() => setLoaded(true))
      .catch((err) => {
        if (err.status >= 400) {
          setLoaded(true);
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthorized]);

  const productList = useMemo(() => {
    return cartProducts?.map(
      (
        {
          cartQuantity,
          itemNo,
          color,
          quantity,
          currentPrice,
          name,
          enabled,
          imageUrls,
          _id,
          chosenSize
        },
        index
      ) => {
        return (
          <CartItem
            key={`${itemNo}-${Date.now()}-${index}`}
            id={_id}
            isDesktop={isDesktop}
            cartQuantity={cartQuantity}
            itemNo={itemNo}
            color={color}
            maxQuantity={quantity}
            currentPrice={currentPrice}
            name={name}
            enabled={enabled}
            imageUrls={imageUrls}
            size={chosenSize}
          />
        );
      }
    );
  }, [cartProducts, isDesktop]);
  return (
    <>
      <Header />
      <Box component="main" className={classes.root}>
        <Box component="section" className={`${classes.inner} wrapper`}>
          <Typography
            className={classes.heading}
            component="h1"
            variant={isDesktop ? 'h5' : 'body1'}
            color="textSecondary"
          >
            Bag
          </Typography>
          <Divider className={classes.divider} variant="fullWidth" />
          <Grid container direction={isDesktop ? 'row' : 'column'}>
            <Grid
              container
              item
              className={classes.productList}
              component="ul"
              xs={isDesktop ? 8 : 12}
            >
              {isLoaded && !cart.length && (
                <Typography
                  className={classes.noItemsAlert}
                  component="p"
                  variant="body1"
                  color="textSecondary"
                >
                  There are no items in your bag
                </Typography>
              )}
              {!isLoaded && !cart.length && (
                <Loader className={{ container: classes.loaderContainer }} />
              )}
              {isLoaded && cart.length > 0 && productList}
            </Grid>

            <Grid
              item
              className={classes.summaryContainer}
              xs={isDesktop ? 3 : 12}
            >
              <Summary products={cartProducts} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Cart;
