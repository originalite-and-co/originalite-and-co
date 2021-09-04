import React, { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Stepper, Step } from '../../components/Stepper';

import { Box } from '@material-ui/core';
import { stepper, payment, userData, delivery } from './data';

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

  console.log(products);

  useEffect(() => {
    if (!cart.length) return;

    const catrItems = cart.map(({ itemNo }) => itemNo);
    (async () => {
      try {
        const response = await productRequests.retrieveProductsByItemNumbers(
          catrItems
        );
        setProducts(response);
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [cart, throwAsyncError]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className={useStyle.wrapper}>
      <Header />
      <Box className={useStyle.content} component={'main'}>
        <Stepper {...stepper} onSubmit={onSubmit}>
          <Step {...payment(useStyle)} />
          <Step {...userData(useStyle)} />
          <Step {...delivery(useStyle)} />
        </Stepper>
      </Box>
      <Footer />
    </Box>
  );
}

export default Checkout;
