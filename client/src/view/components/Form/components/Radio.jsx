import React from 'react';
import { Field } from 'formik';

const Radio = ({ label, name, options = [], ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => {
        return options.map((option) => {
          return (
            <label className="form-radio__label" key={option.label}>
              <input
                type="radio"
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
              />
              <span>{option.label}</span>
            </label>
          );
        });
      }}
    </Field>
  );
};

export default Radio;
