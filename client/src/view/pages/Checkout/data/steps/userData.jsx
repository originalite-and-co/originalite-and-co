import * as yup from 'yup';

const requiredMessage = 'This field is required';

const userData = (style) => ({
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
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    email: yup.string().email().required(requiredMessage),
    phone: yup.number().required(requiredMessage),
  }),
});

export default userData;
