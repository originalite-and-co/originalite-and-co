import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Box } from '@material-ui/core';
import { Error, FormFieldComponent } from './components';

import style from './style';

const FormFields = ({ fields }) => {
  const useStyle = style();

  return fields.map(
    (
      {
        title,
        name,
        component,
        valueComponent,
        groupClass = '',
        groupActiveClass = '',
        errorClass = '',
        style,
        ...rest
      },
      key,
    ) => {
      return (
        <Field name={name} {...rest} key={key}>
          {({ field, meta }) => {
            const { value = '', ...fieldProps } = field;
            const { error, touched } = meta;

            const groupClassName =
              value && !error
                ? groupActiveClass
                : error && touched
                ? errorClass
                : '';

            return (
              <Box
                style={style}
                className={`form__group ${groupClass} ${groupClassName}`.trim()}
              >
                <Box className="form-group__inner">
                  {title && <h5 className={useStyle.fieldTitle}>{title}</h5>}

                  <Box className={`form__field ${useStyle.formField}`}>
                    {FormFieldComponent(component, {
                      ...fieldProps,
                      ...rest,
                      value,
                    })}
                  </Box>
                </Box>

                {valueComponent && value && valueComponent(value)}

                <ErrorMessage name={name} component={Error} />
              </Box>
            );
          }}
        </Field>
      );
    },
  );
};

export default FormFields;
