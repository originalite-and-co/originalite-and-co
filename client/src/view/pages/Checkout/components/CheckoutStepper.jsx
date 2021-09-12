import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';

import { Stepper, Step } from '../../../components/Stepper';
import List from '../../../components/List';
import Email from '../../../components/Email/Email';
import Loader from '../../../components/Loader/Loader';
import Product from './ChechoutProducts';
import { Typography } from '@material-ui/core';
import { stepper, payment, userData, delivery } from '../data';

import useAsyncError from '../../../hooks/useAsyncError';
import {
  customerRequests,
  ordersRequests,
  cartRequests
} from '../../../../api/server';

import styles from '../style';

const CheckoutStepper = ({ products, setResponse }) => {
  const useStyle = styles();
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data) => {
    setLoading(true);
    const orderResponce = await ordersRequests.createOrder({
      customerId: data.customerId,
      deliveryInformation: {
        country: data.country,
        city: data.city,
        address: data.streetAdress,
        postal: data.zipCode
      },
      email: data.email,
      mobile: data.phone,
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml: renderToString(<Email products={products} />)
    });

    console.log(orderResponce);
    await cartRequests.deleteCart();
    localStorage.removeItem('cart');
    setLoading(false);
    setResponse(orderResponce);
  };

  return (
    <>
      {loading && <Loader fixed />}
      {profileData ? (
        <Stepper {...stepper(profileData)} onSubmit={onSubmit}>
          <Step>
            <Typography component="h4" className={useStyle.title}>
              Product list
            </Typography>
            <List
              data={products}
              className={useStyle.productList}
              setKey={({ _id }) => _id}
              component={(props) => <Product {...props} />}
            />
          </Step>
          <Step {...userData(useStyle)} />
          <Step {...payment(useStyle)} />
          <Step {...delivery(useStyle)} />
        </Stepper>
      ) : (
        <Loader fixed />
      )}
    </>
  );
};

export default CheckoutStepper;
