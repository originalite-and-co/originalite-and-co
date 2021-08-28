import React from 'react';
import { Stepper, Step } from '../../components/Stepper';
import * as yup from 'yup';

function Checkout() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stepper
      steps
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAdress: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: '',
        cardNumber: '',
        expityDate: '',
        CVV: '',
      }}
      onSubmit={onSubmit}
    >
      <Step
        {...{
          title: 'Personal Details',
          fields: [
            {
              title: 'First Name',
              name: 'firstName',
            },
            {
              title: 'Last Name',
              name: 'lastName',
            },
            {
              title: 'Email address',
              name: 'email',
            },
            {
              title: 'Phone number',
              name: 'phone',
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
          title: 'Shipping Details',
          fields: [
            {
              title: 'Street address',
              name: 'streetAdress',
            },
            {
              title: 'Zip Code',
              name: 'zipCode',
            },
            {
              title: 'City',
              name: 'city',
            },
            {
              title: 'Country',
              name: 'country',
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
      <Step
        {...{
          fields: [
            {
              name: 'paymentMethod',
              title: 'Payment Method',
              component: 'radio',
              options: [
                {
                  key: 'PayPal',
                  value: 'paypal',
                },
                {
                  key: 'Credid or debit card',
                  value: 'credit',
                },
              ],
            },
            {
              name: 'cardNumber',
              title: 'Card number',
            },
            {
              name: 'expityDate',
              title: 'Expity date',
              type: 'date',
            },
            {
              name: 'CVV',
              title: 'CVC/CVV',
            },
          ],

          schema: yup.object({
            paymentMethod: yup.string().required(),
            cardNumber: yup.string().required(),
            expityDate: yup.string().required(),
            CVV: yup.string().required(),
          }),
        }}
      />
    </Stepper>
  );
}

export default Checkout;
