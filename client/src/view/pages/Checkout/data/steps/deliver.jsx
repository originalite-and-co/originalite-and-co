import * as yup from 'yup';

const requiredMessage = 'This field is required';

const delivery = (style) => ({
  className: style.stepTwo,
  title: 'Shipping Details',
  fields: [
    {
      title: 'Street address',
      name: 'streetAdress',
      groupClass: 'streetAdress'
    },
    {
      title: 'Zip Code',
      type: 'number',
      name: 'zipCode',
      groupClass: 'zipCode'
    },
    {
      title: 'City',
      name: 'city',
      groupClass: 'city'
    },
    {
      title: 'Country',
      name: 'country',
      groupClass: 'country'
    }
  ],
  schema: yup.object({
    streetAdress: yup.string().required(requiredMessage),
    zipCode: yup.string().required(requiredMessage),
    city: yup.string().required(requiredMessage),
    country: yup.string().required(requiredMessage)
  })
});

export default delivery;
