import React, { useState } from 'react';

function Stepper({ children, initialValues, onSubmit }) {
  const components = Array.isArray(children) ? children : [children];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const { length } = components;

  const lastStep = step === length - 1;

  const Component = React.cloneElement(components[step], {
    initialValues: formData,
    handleNext: (data) => {
      setFormData((prev) => ({ ...prev, ...data }));
      if (lastStep) {
        onSubmit(data);
        return;
      }
      if (step < length - 1) {
        setStep((prev) => prev + 1);
      }
    },
    handlePrev: step
      ? (data) => {
          setFormData((prev) => ({ ...prev, ...data }));
          setStep((prev) => prev - 1);
        }
      : null
  });

  return (
    <div className="multi__form" key={step}>
      <div className="multi-form__inner">
        <div className="multi__form-wrapper">{Component}</div>
      </div>
    </div>
  );
}

export default Stepper;
