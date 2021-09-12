import React from 'react';
import { Box } from '@material-ui/core';

import { FormFields } from '../../../components/Form';

const PaymentMethodComponent = ({ value, style }) => {
  const components = {
    credit: (
      <FormFields
        fields={[
          {
            type: 'number',
            name: 'payment.credit.creditNumber',
            title: 'Credit number',
            groupClass: 'creditNumber'
          },
          {
            type: 'number',
            name: 'payment.credit.cvv',
            title: 'CVV',
            groupClass: 'creditCVV'
          },
          {
            groupClass: 'creditDate',
            name: 'payment.credit.expityDate',
            title: 'Expity date',
            type: 'date'
          }
        ]}
      />
    ),
    paypal: (
      <FormFields
        fields={[
          {
            type: 'number',
            title: 'Card number',
            name: 'payment.paypal.creditNumber',
            groupClass: 'paypalNumber'
          },
          {
            type: 'number',
            name: 'payment.paypal.cvv',
            title: 'CVV',
            groupClass: 'paypalCVV'
          },
          {
            groupClass: 'paypalDate',
            name: 'payment.paypal.expityDate',
            title: 'Expity date',
            type: 'date'
          }
        ]}
      />
    )
  };

  if (!components[value]) return null;

  return (
    <Box className={style.paymentMethod}>
      <h4 className={style.paymentMethodTitle}>{value}</h4>
      <Box className={style.paymentMethodInner}>{components[value]}</Box>
    </Box>
  );
};

export default PaymentMethodComponent;
