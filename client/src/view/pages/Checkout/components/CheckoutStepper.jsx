import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';

import { Step, Stepper } from '../../../components/Stepper';
import Email from '../../../components/Email/Email';
import Loader from '../../../components/Loader/Loader';
import { Grid, Typography } from '@material-ui/core';
import { delivery, payment, stepper, userData } from '../data';

import useAsyncError from '../../../hooks/useAsyncError';
import { customerRequests, ordersRequests } from '../../../../api/server';

import useStyles from '../style';
import { cartOperations } from '../../../../redux/features/cart';
import { useDispatch } from 'react-redux';
import ChosenProductInfo from '../../../components/ChosenProductInfo/ChosenProductInfo';

CheckoutStepper.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setResponse: PropTypes.func.isRequired
};

function CheckoutStepper({ products, setResponse }) {
  const styles = useStyles();
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(false);

  const throwAsyncError = useAsyncError();
  const dispatch = useDispatch();

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
    try {
      const orderResponse = await ordersRequests.createOrder({
        customerId: data.customerId,
        deliveryAddress: {
          country: data.country,
          city: data.city,
          address: data.streetAdress,
          postal: data.zipCode
        },
        email: data.email,
        mobile: data.phone,
        letterSubject: 'Thank you for order!',
        letterHtml: renderToString(<Email products={products} />)
      });
      dispatch(cartOperations.deleteCart());
      setLoading(false);
      setResponse(orderResponse);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setLoading(false);
      setResponse({ message: '' });
    }
  };

  const chosenProductList = products?.map(
    ({ image, name, size, currentPrice, color, cartQuantity }) => {
      return (
        <ChosenProductInfo
          product={{
            image,
            name,
            size,
            price: currentPrice,
            color,
            quantity: cartQuantity
          }}
          sizes={{
            img: 2,
            description: 9
          }}
          className={styles.product}
          isListItem={true}
        />
      );
    }
  );

  return (
    <>
      {loading && <Loader fixed />}
      {profileData ? (
        <Stepper {...stepper(profileData)} onSubmit={onSubmit}>
          <Step>
            <Typography component="h4" className={styles.title}>
              Product list
            </Typography>
            <Grid container component="ul" direction="column">
              {chosenProductList}
            </Grid>
          </Step>
          <Step {...userData(styles)} />
          <Step {...payment(styles)} />
          <Step {...delivery(styles)} />
        </Stepper>
      ) : (
        <Loader fixed />
      )}
    </>
  );
}

export default CheckoutStepper;
