import React, { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Step, Stepper } from '../../components/Stepper';

import { Box } from '@material-ui/core';
import { delivery, payment, stepper, userData } from './data';

import { useSelector } from 'react-redux';
import { cartSelectors } from '../../../redux/features/cart';

import useAsyncError from '../../hooks/useAsyncError';
import { customerRequests, productRequests } from '../../../api/server';

import styles from './style';

function Checkout() {
  const useStyle = styles();
  const cart = useSelector(cartSelectors.getCart);

  const [profileData, setProfileData] = useState();
  const [products, setProducts] = useState([]);
  const throwAsyncError = useAsyncError();

  useEffect(() => {
    (async () => {
      try {
        const profile = await customerRequests.retrieveCustomer();
        setProfileData(profile);
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [throwAsyncError]);

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
    // eslint-disable-next-line no-console
    console.log({ data, products });
  };

  return (
    <Box className={useStyle.wrapper}>
      <Header />
      <Box className={useStyle.content} component={'main'}>
        {profileData && (
          <Stepper {...stepper(profileData)} onSubmit={onSubmit}>
            <Step>{JSON.stringify(products, null, 2)}</Step>
            <Step {...userData(useStyle)} />
            <Step {...payment(useStyle)} />
            <Step {...delivery(useStyle)} />
          </Stepper>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default Checkout;
