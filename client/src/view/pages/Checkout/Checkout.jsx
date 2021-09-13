import React, { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CheckoutStepper from './components/CheckoutStepper';
import CheckoutResponse from './components/CheckoutResponse';

import { Box } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { cartSelectors } from '../../../redux/features/cart';

import useAsyncError from '../../hooks/useAsyncError';
import { productRequests } from '../../../api/server';

import styles from './style';

function Checkout() {
  const useStyle = styles();
  const cart = useSelector(cartSelectors.getCart);

  const [products, setProducts] = useState([]);
  const throwAsyncError = useAsyncError();
  const [response, setResponse] = useState();

  useEffect(() => {
    (async () => {
      if (!cart.length) return;
      const catrItems = cart.map(({ itemNo }) => itemNo);
      try {
        const response = await productRequests.retrieveProductsByItemNumbers(
          catrItems
        );
        setProducts(
          response.map((props, index) => ({
            ...props,
            ...cart[index],
            size: cart[index].chosenSize,
            image: props.imageUrls[0]
          }))
        );
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [cart, throwAsyncError]);

  return (
    <Box className={useStyle.wrapper}>
      <Header />
      <Box className={useStyle.content} component={'main'}>
        {response ? (
          <CheckoutResponse response={response} />
        ) : (
          <CheckoutStepper products={products} setResponse={setResponse} />
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default Checkout;
