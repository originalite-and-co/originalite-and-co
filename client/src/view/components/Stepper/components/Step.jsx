import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box, Button } from '@material-ui/core';

import { FormFields } from '../../Form';
import StepperStyles from '../styles';

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
  const useStepperStyles = StepperStyles();
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
                  className={useStepperStyles.prevButton}
                  onClick={handlePrev(values)}
                >
                  Prev
                </Button>
              )}
              {handleNext && (
                <Button className={useStepperStyles.nextButton} type="submit">
                  Next
                </Button>
              )}
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Step;
