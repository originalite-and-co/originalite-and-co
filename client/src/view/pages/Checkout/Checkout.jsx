import React from 'react';
import { Stepper, Step } from '../../components/Stepper';

function Checkout() {
  return (
    <Stepper
      initialValues={{
        name: '',
      }}
      onSubmit={(d) => {
        console.log(d);
      }}
    >
      <Step
        fields={[
          {
            name: 'name',
          },
        ]}
      >
        <p>kek</p>
      </Step>
      <Step>
        <p>kek1</p>
      </Step>
      <Step>
        <p>kek2</p>
      </Step>
      <Step>
        <p>kek3</p>
      </Step>
    </Stepper>
  );
}

export default Checkout;
