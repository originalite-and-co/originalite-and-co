import React, { useState } from 'react';
import * as yup from 'yup';

import { Box } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import { Stepper, Step } from '../../components/Stepper';
import PaymentMethodComponent from './PaymentMethod';

import styles from './style';

const qqq = {
  credit: yup.object().shape({
    creditNumber: yup.number().required(),
  }),
  paypal: yup.object().shape({
    creditNumber: yup.number().required(),
  }),
  cash: yup.object().shape({
    value: yup.number().required(),
  }),
};

function Checkout() {
  const [paymentSchema, setPaymentSchema] = useState({});

  console.log(paymentSchema);

  const useStyle = styles();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="center">
      <Stepper
        steps
        checkArterAll
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          streetAdress: '',
          zipCode: '',
          city: '',
          country: '',
          payment: {
            type: '',
            credit: {
              creditNumber: '',
              cvv: '',
              expityDate: '',
            },
            paypal: {
              creditNumber: '',
              cvv: '',
              expityDate: '',
            },
            cash: {
              creditNumber: '',
              cvv: '',
              expityDate: '',
            },
          },
        }}
        onSubmit={onSubmit}
        className="form__checkout"
      >
        <Step
          {...{
            className: useStyle.stepThree,
            title: 'Payment Method',
            fields: [
              {
                name: 'payment.type',
                valueComponent: (value) => {
                  return (
                    <PaymentMethodComponent value={value} style={useStyle} />
                  );
                },

                groupClass: 'payment',
                component: 'radio',
                options: [
                  {
                    label: 'PayPal',
                    value: 'paypal',
                    icon: <AccountBalanceIcon />,
                  },
                  {
                    label: 'Credit card',
                    value: 'credit',
                    icon: <CreditCardIcon />,
                  },
                  {
                    label: 'Cash',
                    value: 'cash',
                    icon: <MonetizationOnIcon />,
                  },
                ],
              },
            ],
            schema: yup.object({
              payment: yup.object().shape({
                type: yup.string().required(),
                ...paymentSchema,
              }),
            }),
          }}
        />
        <Step
          {...{
            className: useStyle.stepOne,
            title: 'Personal Details',
            fields: [
              {
                title: 'First Name',
                name: 'firstName',
                groupClass: 'firstName',
              },
              {
                title: 'Last Name',
                name: 'lastName',
                groupClass: 'lastName',
              },
              {
                title: 'Email address',
                name: 'email',
                groupClass: 'email',
              },
              {
                title: 'Phone number',
                name: 'phone',
                groupClass: 'phone',
              },
            ],
            schema: yup.object({
              firstName: yup.string().required(),
              lastName: yup.string().required(),
              email: yup.string().email().required(),
              phone: yup.number().required(),
            }),
          }}
        />
        <Step
          {...{
            className: useStyle.stepTwo,
            title: 'Shipping Details',
            fields: [
              {
                title: 'Street address',
                name: 'streetAdress',
                groupClass: 'streetAdress',
              },
              {
                title: 'Zip Code',
                name: 'zipCode',
                groupClass: 'zipCode',
              },
              {
                title: 'City',
                name: 'city',
                groupClass: 'city',
              },
              {
                title: 'Country',
                name: 'country',
                groupClass: 'country',
              },
            ],
            schema: yup.object({
              streetAdress: yup.string().required(),
              zipCode: yup.string().required(),
              city: yup.string().required(),
              country: yup.string().required(),
            }),
          }}
        />
      </Stepper>
    </Box>
  );
}

export default Checkout;
