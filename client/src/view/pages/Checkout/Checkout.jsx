import React from 'react';
import * as yup from 'yup';

import { Stepper, Step } from '../../components/Stepper';
import styles from './style';

function Checkout() {
  const useStyle = styles();

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
      className="form__checkout"
    >
      <Step
        {...{
          className: useStyle.stepThree,
          title: 'Payment Method',
          fields: [
            {
              name: 'cardNumber',
              title: 'Credit card',
              groupClass: 'cardNumber',
            },
            {
              name: 'expityDate',
              title: 'Expity date',
              type: 'date',
              groupClass: 'expityDate',
            },
            {
              name: 'CVV',
              title: 'CVC/CVV',
              groupClass: 'cvv',
            },
          ],
          schema: yup.object({
            cardNumber: yup.string().required(),
            expityDate: yup.string().required(),
            CVV: yup.string().required(),
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
  );
}

export default Checkout;
