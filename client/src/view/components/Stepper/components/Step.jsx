import React from 'react';
import { Formik, Form } from 'formik';
import { FormFields } from '../../Form';

import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';

Step.propTypes = {
  fields: PropTypes.object,
  schema: PropTypes.object,
  formProps: PropTypes.object,
  initialValues: PropTypes.object,
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

            <Box className="form__inner">
              {fields && (
                <FormFields
                  fields={fields}
                  errors={errors}
                  initialValues={initialValues}
                />
              )}
              {children}
            </Box>

            {subTitle && <h4 className="form__subtitle">{subTitle}</h4>}

            <Box className="stepper__navigation">
              {handlePrev && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePrev(values)}
                >
                  Prev
                </Button>
              )}
              {handleNext && <Button type="submit">Next</Button>}
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Step;
