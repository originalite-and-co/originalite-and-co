import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Authentication.module.scss';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup } from '@material-ui/core';
import { customerRequests } from '../../../../../api/server';
import useAsyncError from '../../../../hooks/useAsyncError';
import { useHistory } from 'react-router-dom';
import Toast from '../../../../components/Toast/Toast';
import * as yup from 'yup';
import { Typography } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

SignUpPage.propTypes = {};

const useStyles = makeStyles({
  textField: {
    borderBottom: '1px solid white',
    color: '#FFFFFF !important',
  },
  visibilityBtn: {
    color: '#FFFFFF !important',
    position: 'absolute',
    top: '30%',
    right: 0,
  },
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  mobile: '',
  birthdate: '',
  gender: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required().label('first name'),
  lastName: yup.string().required().label('last name'),
  login: yup.string().min(8).required().label('login'),
  email: yup.string().email().required().label('email'),
  password: yup.string().min(8).required().label('password'),
  mobile: yup
    .string()
    .matches(phoneRegExp, 'mobile must be a valid phone number')
    .required()
    .label('mobile'),
  birthdate: yup.string().required().label('birthday'),
  gender: yup.string().required().label('gender'),
});

function SignUpPage({ onClick }) {
  const classes = useStyles();
  const throwAsyncError = useAsyncError();
  const [signedUp, setIsSignedUp] = useState(false);
  const [typePassword, setTypePassword] = useState(true);

  const handleSuccessfulSignUp = () => {
    setIsSignedUp(true);
    setTimeout(() => {
      onClick();
    }, 1500);
  };

  const handlePasswordVisibilityClick = () => {
    setTypePassword(!typePassword);
  };

  const passwordVisibility = typePassword ? (
    <VisibilityOffIcon
      className={classes.visibilityBtn}
      fontSize="small"
      onClick={handlePasswordVisibilityClick}
    />
  ) : (
    <VisibilityIcon
      className={classes.visibilityBtn}
      fontSize="small"
      onClick={handlePasswordVisibilityClick}
    />
  );

  return (
    <>
      {signedUp && (
        <Toast message="You've successfully signed up. Please log in." />
      )}
      <Box className={Styles.signUpPageWrapper} data-testid="signup-page">
        <p className={Styles.text}>
          Please enter your account details to sign up
        </p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            customerRequests
              .createCustomer(values)
              .then(handleSuccessfulSignUp())
              .catch((error) => throwAsyncError(error));
          }}
        >
          {({ values, touched, isValidating, isSubmitting }) => (
            <Form>
              <Box className={Styles.signUpGroup}>
                <FormGroup data-testid="firstName">
                  <Field
                    as={TextField}
                    name="firstName"
                    fullWidth
                    label="First name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="firstName"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup data-testid="lastName">
                  <Field
                    as={TextField}
                    name="lastName"
                    fullWidth
                    label="Last name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="lastName"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup data-testid="login">
                  <Field
                    as={TextField}
                    name="login"
                    fullWidth
                    label="Login name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="login"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup data-testid="email">
                  <Field
                    as={TextField}
                    name="email"
                    fullWidth
                    label="E-mail"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup data-testid="password">
                  <Box style={{ position: 'relative' }}>
                    <Field
                      as={TextField}
                      name="password"
                      type={typePassword ? 'password' : 'text'}
                      fullWidth
                      label="Password"
                      className={classes.textField}
                      InputLabelProps={{ className: Styles.textFieldInput }}
                      inputProps={{ className: Styles.textFieldInput }}
                    />
                    {passwordVisibility}
                  </Box>
                  <ErrorMessage
                    name="password"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Field
                    as={TextField}
                    name="mobile"
                    fullWidth
                    label="Mobile"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="mobile"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Field
                    as={TextField}
                    name="birthdate"
                    fullWidth
                    label="Birthdate"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="birthdate"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup>
                  <Field
                    as={TextField}
                    name="gender"
                    fullWidth
                    label="Gender"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="gender"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
              </Box>
              <Box className={Styles.loginBtn}>
                <Button
                  type="submit"
                  text="Sign Up"
                  backgroundColor="#E5E5E5"
                  color="#000000"
                  onClick={(x) => x}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default SignUpPage;
