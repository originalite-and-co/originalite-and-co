import React, { useState } from 'react';
import Styles from '../Authentication.module.scss';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '../../../../components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { FormGroup, Typography } from '@material-ui/core';
import { customerRequests } from '../../../../../api/server';
import useAsyncError from '../../../../hooks/useAsyncError';
import { useHistory } from 'react-router-dom';
import Toast from '../../../../components/Toast/Toast';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { useDispatch } from 'react-redux';
import { authorizeOperations } from '../../../../../redux/features/authorization';

const useStyles = makeStyles({
  textField: {
    borderBottom: '1px solid white',
    color: '#FFFFFF !important',
  },
  radio: {
    color: '#FFFFFF !important',
  },
  visibilityBtn: {
    color: '#FFFFFF !important',
    position: 'absolute',
    top: '30%',
    right: 0,
  },
});

const initialValues = {
  loginOrEmail: '',
  password: '',
};

const validationSchema = yup.object().shape({
  loginOrEmail: yup.string().email().label('email'),
  password: yup.string().label('password'),
});

function LoginPage() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const throwAsyncError = useAsyncError();
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [typePassword, setTypePassword] = useState(true);
  const [checked, setChecked] = React.useState(false);

  const keepMeSignedIn = checked ? (
    <RadioButtonCheckedIcon fontSize="small" className={classes.radio} />
  ) : (
    <RadioButtonUncheckedIcon fontSize="small" className={classes.radio} />
  );

  const { authorizeUser } = authorizeOperations;

  const forwardIfAuthorized = async () => {
    dispatch(authorizeUser());

    if (sessionStorage.getItem('token') || localStorage.getItem('token')) {
      setTimeout(() => {
        history.push('/');
      }, 1500);
    }
  };
  const handleChange = () => {
    setChecked(!checked);
  };

  const handlePasswordVisibilityClick = () => {
    setTypePassword(!typePassword);
  };

  const passwordVisibility = typePassword ? (
    <VisibilityOffIcon
      fontSize="small"
      className={classes.visibilityBtn}
      onClick={handlePasswordVisibilityClick}
    />
  ) : (
    <VisibilityIcon
      fontSize="small"
      className={classes.visibilityBtn}
      onClick={handlePasswordVisibilityClick}
    />
  );

  return (
    <>
      {loggedIn && (
        <Toast
          severity="success"
          variant="filled"
          message="Welcome to Originalite, fashionista"
        />
      )}
      <Box className={Styles.logInPageWrapper} data-testid="login-page">
        <p className={Styles.text}>
          Please enter your account details to log in
        </p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            customerRequests
              .logIn(values, checked)
              .then(setLoggedIn(true))
              .then(forwardIfAuthorized)
              .catch((error) => throwAsyncError(error));
          }}
        >
          {({ isSubmitting, isValidating }) => (
            <Form>
              <Box className={Styles.loginGroup}>
                <FormGroup data-testid="loginOrEmail">
                  <Field
                    name="loginOrEmail"
                    as={TextField}
                    data-testid="email-input"
                    required
                    fullWidth
                    label="E-mail"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldInput }}
                    inputProps={{ className: Styles.textFieldInput }}
                  />
                  <ErrorMessage
                    name="loginOrEmail"
                    render={(msg) => (
                      <Typography color="error">{msg}</Typography>
                    )}
                  />
                </FormGroup>
                <FormGroup data-testid="password">
                  <Box style={{ position: 'relative' }}>
                    <Field
                      name="password"
                      as={TextField}
                      type={typePassword ? 'password' : 'text'}
                      required
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
                <Box
                  onClick={handleChange}
                  className={Styles.radio}
                  data-testid="radio"
                >
                  {keepMeSignedIn}
                  <p className={Styles.radioText}>Keep me signed in</p>
                </Box>
              </Box>
              <Box className={Styles.loginBtn}>
                <Button
                  disabled={isSubmitting || isValidating}
                  type="submit"
                  text="LOG IN"
                  backgroundColor="#E5E5E5"
                  color="#000000"
                  onClick={() => {}}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default LoginPage;
