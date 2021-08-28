import React, { useEffect, useMemo, useState } from 'react';
import {
  cartOperations,
  cartSelectors
} from '../../../redux/features/cart/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  authorizationSelectors,
  authorizeOperations
} from '../../../redux/features/authorization';
import useAsyncError from '../../hooks/useAsyncError';
import Header from '../../components/Header/Header';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import Summary from './Summary/Summary';
import CartItem from './CartItem/CartItem';
import { productRequests } from '../../../api/server';

Cart.propTypes = {};

const { WINDOW_DESKTOP_SIZE } = constants;

function Cart(props) {
  const { width } = useWindowSize();
  const [isDesktop, setDesktop] = useState(width >= WINDOW_DESKTOP_SIZE);
  const [isLoaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);

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

        const products = cart.map((cartItem) => {
          const { color, quantity, currentPrice, name, enabled, imageUrls } =
            response.find(({ itemNo }) => {
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
        setProducts(products);
        setLoaded(true);
      } catch (error) {
        throwAsyncError(error);
      }
    };

    asyncFunction();
  }, [cart]);

  useEffect(() => {
    setLoaded(false);
    dispatch(authorizeOperations.authorizeUser());
    dispatch(cartOperations.getCart())
      .then(() => setLoaded(true))
      .catch((err) => {
        if (err.status >= 400) {
          setLoaded(true);
          console.error(err);
        }
      });
  }, [isUserAuthorized]);

  const productList = useMemo(() => {
    return products?.map(
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
  }, [products]);
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
              <Summary products={products} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Cart;
