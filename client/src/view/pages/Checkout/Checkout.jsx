import React from 'react';
import { Stepper, Step } from '../../components/Stepper';
import * as yup from 'yup';

function Checkout() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stepper
      initialValues={yup.object({
        name: '',
        lastName: '',
      })}
      onSubmit={onSubmit}
    >
      <Step
        schema={yup.object({
          name: yup.string().required(),
          lastName: yup.string().required(),
        })}
        fields={[
          {
            name: 'name',
          },
          {
            name: 'lastName',
          },
        ]}
      />
    </Stepper>
  );
}

export default Checkout;
