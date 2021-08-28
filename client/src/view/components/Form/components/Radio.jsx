import React from 'react';
import { Field } from 'formik';

const Radio = ({ label, name, options = [], ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => {
        return options.map((option) => {
          return (
            <React.Fragment key={option.key}>
              <label className="form-radio__label">
                <input
                  type="radio"
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <span>{option.key}</span>
              </label>
            </React.Fragment>
          );
        });
      }}
    </Field>
  );
};

export default Radio;
