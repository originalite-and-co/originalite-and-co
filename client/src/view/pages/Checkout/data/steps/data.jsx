const checkoutStepper = ({
  _id,
  firstName,
  lastName,
  email,
  telephone: phone
}) => ({
  className: 'form__checkout',
  steps: true,
  initialValues: {
    customerId: _id,
    firstName,
    lastName,
    email,
    phone,
    streetAdress: '',
    zipCode: '',
    city: '',
    country: '',
    payment: {
      type: '',
      credit: {
        creditNumber: '',
        cvv: '',
        expityDate: ''
      },
      paypal: {
        creditNumber: '',
        cvv: '',
        expityDate: ''
      }
    }
  }
});

export default checkoutStepper;
