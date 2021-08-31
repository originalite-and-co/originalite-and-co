import React from 'react';
import { Box } from '@material-ui/core';

import { FormFields } from '../../components/Form';

const PaymentMethodComponent = ({ value, style }) => {
  const components = {
    credit: (
      <FormFields
        fields={[
          {
            name: 'payment.credit.creditNumber',
            title: 'Credit number',
            groupClass: 'creditNumber',
          },
          {
            name: 'payment.credit.cvv',
            title: 'CVV',
            groupClass: 'creditCVV',
          },
          {
            groupClass: 'creditDate',
            name: 'payment.credit.expityDate',
            title: 'Expity date',
            type: 'date',
          },
        ]}
      />
    ),
    paypal: (
      <FormFields
        fields={[
          {
            title: 'Card number',
            name: 'payment.paypal.creditNumber',
            groupClass: 'paypalNumber',
          },
          {
            name: 'payment.paypal.cvv',
            title: 'CVV',
            groupClass: 'paypalCVV',
          },
          {
            groupClass: 'paypalDate',
            name: 'payment.paypal.expityDate',
            title: 'Expity date',
            type: 'date',
          },
        ]}
      />
    ),
    cash: (
      <FormFields
        fields={[
          {
            groupClass: 'cash',
            title: 'Cash',
            name: 'payment.cash.value',
          },
        ]}
      />
    ),
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
