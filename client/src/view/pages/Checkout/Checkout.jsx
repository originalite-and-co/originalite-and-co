import React from 'react';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

import { Stepper, Step } from '../../components/Stepper';

const useStyles = makeStyles({
  stepOne: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20,
    },
    '& .firstName': {
      gridArea: '1 / 1 / 2 / 3',
    },
    '& .lastName': {
      gridArea: '1 / 3 / 2 / 5',
    },
    '& .email': {
      gridArea: '2 / 1 / 3 / 3',
    },
    '& .phone': {
      gridArea: '2 / 3 / 3 / 5',
    },
  },
  stepTwo: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 20,
    },
    '& .streetAdress': {
      gridArea: '1 / 1 / 2 / 4',
    },
    '& .zipCode': {
      gridArea: '2 / 1 / 3 / 2',
    },
    '& .city': {
      gridArea: '2 / 2 / 3 / 3',
    },
    '& .country': {
      gridArea: '2 / 3 / 3 / 4',
    },
  },
  stepThree: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20,
    },
    '& .cardNumber': {
      gridArea: '1 / 1 / 2 / 3;',
    },
    '& .expityDate': {
      gridArea: '1 / 3 / 2 / 4',
    },
    '& .cvv': {
      gridArea: '1 / 4 / 2 / 5',
    },
  },
});

function Checkout() {
  const style = useStyles();

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
          className: style.stepThree,
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
          className: style.stepOne,
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
          className: style.stepTwo,
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
