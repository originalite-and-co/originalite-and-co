import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { FormFields } from '../../Form';

Step.propTypes = {
  fields: PropTypes.array,
  initialValues: PropTypes.object,
  schema: PropTypes.object,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
};

function Step({
  children,
  fields,
  initialValues,
  schema,
  handleNext,
  handlePrev,
  ...formProps
}) {
  const { title, subTitle, ...restFormProps } = formProps;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleNext}
      validationSchema={schema}
    >
      {({ errors, values }) => {
        return (
          <Form {...restFormProps}>
            {title && <h4 className="form__title">{title}</h4>}

            <div className="form__inner">
              {fields && (
                <FormFields
                  fields={fields}
                  errors={errors}
                  initialValues={initialValues}
                />
              )}
              {children}
            </div>

            {subTitle && <h4 className="form__subtitle">{subTitle}</h4>}

            <div className="stepper__navigation">
              {handlePrev && (
                <button onClick={() => handlePrev(values)}>Prev</button>
              )}
              {handleNext && <button type="submit">Next</button>}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Step;
