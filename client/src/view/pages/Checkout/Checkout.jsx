import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Box } from '@material-ui/core';
import { Stepper, Step } from '../../components/Stepper';
import { stepper, payment, userData, delivery } from './data';

import styles from './style';

function Checkout() {
  const useStyle = styles();

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
