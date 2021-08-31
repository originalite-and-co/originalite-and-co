import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box } from '@material-ui/core';
import { FormFields } from '../../Form';

import stepperStyles from '../styles';

Step.propTypes = {
  fields: PropTypes.array,
  initialValues: PropTypes.object,
  schema: PropTypes.object,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  // isLastStep: PropTypes.bool,
};

function Step({
  children,
  fields,
  initialValues,
  schema,
  handleNext,
  handlePrev,
  isLastStep,
  ...formProps
}) {
  const useStyles = stepperStyles();
  const { title, subTitle, ...restFormProps } = formProps;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleNext}
      validationSchema={schema}
    >
      {({ values }) => {
        return (
          <Form {...restFormProps} lang="en">
            {title && (
              <h4 className={`form__title ${useStyles.formTitle}`}>{title}</h4>
            )}

            <Box className={`form__inner ${useStyles.formInner}`}>
              {fields && <FormFields fields={fields} />}
              {children}
            </Box>

            {subTitle && (
              <h4 className={`form__subtitle ${useStyles.subTitle}`}>
                {subTitle}
              </h4>
            )}

            <Box className={`form__navigation ${useStyles.navigation}`}>
              {handlePrev && (
                <button
                  type="button"
                  className={useStyles.prevButton}
                  onClick={() => handlePrev(values)}
                >
                  Prev
                </button>
              )}
              {handleNext && (
                <button className={useStyles.nextButton} type="submit">
                  {isLastStep ? 'Submit' : 'Next'}
                </button>
              )}
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Step;
