import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

Stepper.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Stepper({ children, initialValues, onSubmit }) {
  const components = Array.isArray(children) ? children : [children];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const { length } = components;

  const lastStep = step === length - 1;

  const Component = React.cloneElement(components[step], {
    initialValues: formData,
    handleNext: (data) => () => {
      setFormData((prev) => ({ ...prev, ...data }));
      if (lastStep) return onSubmit(data);
      if (step < length - 1) setStep((prev) => prev + 1);
    },
    handlePrev: step
      ? (data) => () => {
          setFormData((prev) => ({ ...prev, ...data }));
          setStep((prev) => prev - 1);
        }
      : null,
  });

  return (
    <Box className="stepper" key={step}>
      <Box className="stepper__inner">
        <Box className="stepper__wrapper">{Component}</Box>
      </Box>
    </Box>
  );
}

export default Stepper;
