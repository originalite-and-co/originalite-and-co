const checkoutStepper = ({ firstName, lastName, email, telephone: phone }) => ({
  className: 'form__checkout',
  steps: true,
  initialValues: {
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
      },
      cash: {
        value: ''
      }
    }
  }
});

export default checkoutStepper;
