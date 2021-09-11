import * as yup from 'yup';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import PaymentMethodComponent from '../../PaymentMethod';

const requiredMessage = 'This field is required';

const validationSchemaData = {
  credit: yup.object().shape({
    creditNumber: yup.number().required(requiredMessage),
    expityDate: yup.date().required(requiredMessage),
    cvv: yup.number().required(requiredMessage)
  }),
  paypal: yup.object().shape({
    creditNumber: yup.number().required(requiredMessage),
    expityDate: yup.date().required(requiredMessage),
    cvv: yup.number().required(requiredMessage)
  }),
  cash: yup.object().shape({
    value: yup.number().min(0).required(requiredMessage)
  })
};

const payment = (style) => ({
  className: style.stepThree,
  title: 'Payment Method',
  fields: [
    {
      name: 'payment.type',
      valueComponent: (value) => {
        return <PaymentMethodComponent value={value} style={style} />;
      },
      groupClass: 'payment',
      component: 'radio',
      options: [
        {
          label: 'PayPal',
          value: 'paypal',
          icon: <AccountBalanceIcon />
        },
        {
          label: 'Credit card',
          value: 'credit',
          icon: <CreditCardIcon />
        },
        {
          label: 'Cash',
          value: 'cash',
          icon: <MonetizationOnIcon />
        }
      ]
    }
  ],
  schema: yup.object({
    payment: yup
      .object()
      .shape({
        type: yup.string().required(requiredMessage)
      })
      .when((values, schema) => {
        return schema.shape({
          [values.type]: validationSchemaData[values.type]
        });
      })
  })
});

export default payment;
