import React, { useCallback, useEffect, useState } from 'react';
import { cartOperations, cartSelectors } from '../../../redux/features/cart';
import { useDispatch, useSelector } from 'react-redux';
import {
  authorizationSelectors,
  authorizeOperations,
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
  const [isLoaded, setLoaded] = useState(false);
  const [isDesktop, setDesktop] = useState(width >= WINDOW_DESKTOP_SIZE);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const isUserAuthorized = useSelector(authorizationSelectors.authorization);
  const cart = useSelector(cartSelectors.getCart);

  const throwAsyncError = useAsyncError();
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(
    useCallback(() => {
      setLoaded(false);
      const itemNumbers = cart.map((item) => item.itemNo);
      productRequests.retrieveProductsByItemNumbers(itemNumbers).then(
        (response) => {
          const products = response.map((item) => {
            const { cartQuantity } = cart.find(
              (cartItem) => cartItem.itemNo === item.itemNo,
            );
            return { ...item, cartQuantity };
          });
          setProducts(products);
          setLoaded(true);
        },
        (error) => throwAsyncError(error),
      );
    }, [cart]),
    [cart],
  );

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

  const productList = products?.map(({ cardQuantity, itemNo }) => {
    return <CartItem key={itemNo} cardQuantity={cardQuantity} />;
  });
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
              <Summary />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Cart;
