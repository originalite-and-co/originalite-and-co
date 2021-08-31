import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import stepperStyles from '../styles';

Stepper.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Stepper({ children, initialValues, onSubmit, steps }) {
  const useStepperStyles = stepperStyles();
  const components = Array.isArray(children) ? children : [children];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const { length } = components;

  const isLastStep = step === length - 1;

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (isLastStep) return onSubmit(data);
    setStep((prev) => prev + 1);
  };

  const handlePrev = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev - 1);
  };

  const Component = React.cloneElement(components[step], {
    initialValues: formData,
    handleNext,
    handlePrev: step ? handlePrev : null,
    isLastStep,
  });

  return (
    <Box className={useStepperStyles.stepper} key={step}>
      <Box className="stepper__inner">
        {steps && (
          <h4 className={`stepper__progress ${useStepperStyles.progress}`}>
            Step {step + 1} / {length}
          </h4>
        )}
        <Box className="stepper__wrapper">{Component}</Box>
      </Box>
    </Box>
  );
}

export default Stepper;
