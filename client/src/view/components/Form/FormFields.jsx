import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Error, FormFieldComponent } from './components';

const FormFields = ({ fields }) => {
  return fields.map(
    (
      {
        title,
        name,
        showValue,
        component,
        groupClass = 'form__group',
        groupActiveClass = '',
        errorClass = '',
        ...rest
      },
      key,
    ) => {
      return (
        <Field name={name} {...rest} key={key}>
          {({ field, meta }) => {
            const { value: fieldValue = '', ...fieldProps } = field;
            const { value, error, touched } = meta;

            const groupClassName =
              value && !error
                ? groupActiveClass
                : error && touched
                ? errorClass
                : '';

            return (
              <div className={`${groupClass} ${groupClassName}`.trim()}>
                <label className="form__label">
                  {title && <h5 className="form-label__title">{title}</h5>}

                  <div className="form-label__inner">
                    {FormFieldComponent(component, {
                      ...fieldProps,
                      ...rest,
                      value: fieldValue,
                    })}
                  </div>
                </label>

                {showValue && fieldValue && (
                  <p className="form__value">{fieldValue}</p>
                )}

                <ErrorMessage name={name} component={Error} />
              </div>
            );
          }}
        </Field>
      );
    },
  );
};

export default FormFields;
