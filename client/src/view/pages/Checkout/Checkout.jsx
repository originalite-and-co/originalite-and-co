import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import Email from '../../components/Email/Email';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Step, Stepper } from '../../components/Stepper';
import List from '../../components/List';
import Product from './ChechoutProducts';
import { Box, Typography } from '@material-ui/core';
import { delivery, payment, stepper, userData } from './data';

import { useSelector } from 'react-redux';
import { cartSelectors } from '../../../redux/features/cart';

import useAsyncError from '../../hooks/useAsyncError';
import {
  customerRequests,
  ordersRequests,
  productRequests
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
            size: cart[index].chosenSize,
            image: props.imageUrls[0]
          }))
        );
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [cart, throwAsyncError]);

  const onSubmit = async (data) => {
    const total = products.reduce(
      (acc, { currentPrice, cartQuantity }) =>
        Number(acc) + Number(currentPrice) * Number(cartQuantity),
      0
    );

    const dataForEmail = products.map((item) => {
      return {
        _id: item._id,
        image: item.image,
        name: item.name,
        size: item.chosenSize,
        currentPrice: Number(item.currentPrice),
        color: item.color,
        quantity: item.cartQuantity
      };
    });

    const letterHtml = ReactDOMServer.renderToString(
      <Email products={dataForEmail} total={total} />
    );
    const order = {
      customerId: profileData._id,
      deliveryInformation: {
        country: data.country,
        city: data.city,
        address: data.streetAdress,
        postal: data.zipCode
      },
      email: data.email,
      mobile: data.phone,
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml: letterHtml
    };

    await ordersRequests.createOrder(order);
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
