import React from 'react';
import * as yup from 'yup';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Box } from '@material-ui/core';
import { Stepper, Step } from '../../components/Stepper';
import styles from './style';
import { FormFields } from '../../components/Form';

const paymentMethodComponent = (key) => {
  const components = {
    credit: (
      <FormFields
        fields={[
          { name: 'payment.credit.creditNumber' },
          { name: 'payment.credit.cvv' },
          { name: 'payment.credit.expityDate' },
        ]}
      />
    ),
    paypal: (
      <FormFields
        fields={[
          { name: 'payment.paypal.creditNumber' },
          { name: 'payment.paypal.cvv' },
          { name: 'payment.paypal.expityDate' },
        ]}
      />
    ),
    cash: <FormFields fields={[{ name: 'payment.cash.value' }]} />,
  };

  return (
    <div className="payment-method">
      <h4 className="payment-method__title">{key}</h4>
      <div className="payment-method__inner">{components[key]}</div>
    </div>
  );
};

function Checkout() {
  const useStyle = styles();

  const onSubmit = (data) => {
    console.log({ ...data.payment[data.payment.type] });
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
          payment: { type: 'credit' },
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
                name: 'type.payment',
                valueComponent: paymentMethodComponent,
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
              // {
              //   name: 'expityDate',
              //   title: 'Expity date',
              //   type: 'date',
              //   groupClass: 'expityDate',
              // },
              // {
              //   name: 'CVV',
              //   title: 'CVC/CVV',
              //   groupClass: 'cvv',
              // },
            ],
            // schema: paymentSchema,
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
