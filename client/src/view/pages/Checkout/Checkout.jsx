import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import Email from '../../components/Email/Email';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Stepper, Step } from '../../components/Stepper';
import List from '../../components/List';
import Product from './ChechoutProducts';
import { Box, Typography } from '@material-ui/core';
import { stepper, payment, userData, delivery } from './data';

import { useSelector } from 'react-redux';
import { cartSelectors } from '../../../redux/features/cart';

import useAsyncError from '../../hooks/useAsyncError';
import {
  productRequests,
  customerRequests,
  ordersRequests
} from '../../../api/server';

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
        setProducts(
          response.map((props, index) => ({
            ...props,
            ...cart[index],
            size: props.sizes[props.chosenSize],
            image: props.imageUrls[0]
          }))
        );
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [cart, throwAsyncError]);

  const onSubmit = (data) => {
    // const email = ReactDOMServer.renderToString(<Email products={products} />);
    const order = {
      customerId: profileData._id,
      deliveryInformation: {
        country: data.country,
        city: data.city,
        address: data.streetAdress,
        postal: data.zipCode
      },
      email: profileData.email,
      mobile: profileData.telephone
    };

    const request = ordersRequests.createOrder(order);
    console.log(request);
  };

  return (
    <Box className={useStyle.wrapper}>
      <Header />
      <Box className={useStyle.content} component={'main'}>
        {profileData && (
          <Stepper {...stepper(profileData)} onSubmit={onSubmit}>
            <Step>
              <Typography component="h4" className={useStyle.title}>
                Product list
              </Typography>
              <List
                data={products}
                className={useStyle.productList}
                setKey={(props) => props._id}
                component={(props) => <Product {...props} />}
              />
            </Step>
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
