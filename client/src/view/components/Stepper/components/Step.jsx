import React from 'react';
import { Formik, Form } from 'formik';
import { FormFields } from '../../Form';

const Step = ({
  children,
  fields,
  initialValues,
  schema,
  handleNext,
  handlePrev,
  ...formProps
}) => {
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

            <div className="multi-form__navigation">
              {handlePrev && (
                <button
                  className="btn btn--outline-primary btn--medium"
                  type="button"
                  onClick={() => handlePrev(values)}
                >
                  Prev
                </button>
              )}
              {handleNext && (
                <button className="btn btn--primary btn--medium" type="submit">
                  Next
                </button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Step;
