import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import Email from '../../components/Email/Email';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Stepper, Step } from '../../components/Stepper';
import List from '../../components/List';
import Product from './ChechoutProducts';
import { Box } from '@material-ui/core';
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
  //   const email = ReactDOMServer.renderToString(<Email />);
  const useStyle = styles();
  const cart = useSelector(cartSelectors.getCart);

  console.log(cart);

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
          response.map(
            ({ brand, color, currentPrice, name, imageUrls, _id }, index) => ({
              _id,
              brand,
              color,
              currentPrice,
              name,
              image: imageUrls[0],
              quantity: cart[index].cartQuantity
            })
          )
        );
      } catch (error) {
        throwAsyncError(error);
      }
    })();
  }, [cart, throwAsyncError]);

  console.log(profileData);

  const onSubmit = (data) => {
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
    console.log({ data, products });
  };

  return (
    <Box className={useStyle.wrapper}>
      <Header />
      <Box className={useStyle.content} component={'main'}>
        {profileData && (
          <Stepper {...stepper(profileData)} onSubmit={onSubmit}>
            <Step>
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
