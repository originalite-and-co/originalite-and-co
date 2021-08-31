import React from 'react';
import PropTypes from 'prop-types';
import { customerRequests } from '../../../../api/server';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { makeStyles } from '@material-ui/styles';
import CreateIcon from '@material-ui/icons/Create';
import * as yup from 'yup';

import { FormGroup, Box, Typography, TextField } from '@material-ui/core';

import Button from '../../../components/Button/Button';
import useAsyncError from '../../../hooks/useAsyncError';
import Styles from './../Member.module.scss';
import { string } from 'yup';
import { useDispatch } from 'react-redux';
import { authorizeOperations } from '../../../../redux/features/authorization';

MyProfile.propTypes = {
  customer: PropTypes.object.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const useStyles = makeStyles(generateStyles);

function MyProfile({ customer, handleDataUpdate }) {
  const throwError = useAsyncError();

  const classes = useStyles();

  const initialValues = {
    email: customer.email,
    firstName: customer.firstName,
    lastName: customer.lastName,
    telephone: customer.telephone,
    birthdate: customer.birthdate,
    gender: customer.gender,
  };

  const phoneRegExp =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(authorizeOperations.loggOutUser());
  };

  const validationSchema = yup.object().shape({
    email: string().email('Must be a valid email'),
    telephone: string().matches(phoneRegExp, 'Phone number is not valid'),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          if (JSON.stringify(values) === JSON.stringify(initialValues)) {
            return;
          }
          customerRequests
            .updateCustomer(values)
            .then(handleDataUpdate())
            .catch((error) => throwError(error));
        }}
      >
        {({ isSubmitting, isValidating }) => (
          <Form>
            <Box>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  helperText="Current email address"
                  name="email"
                  fullWidth
                  inputProps={{ className: classes.input }}
                />
                <CreateIcon fontSize="small" className={classes.createIcon} />
                <ErrorMessage
                  name="email"
                  render={(msg) => <Typography color="error">{msg}</Typography>}
                />
              </FormGroup>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  helperText="Current name"
                  name="firstName"
                  fullWidth
                  inputProps={{ className: classes.input }}
                />
                <CreateIcon fontSize="small" className={classes.createIcon} />
              </FormGroup>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  helperText="Current last name"
                  name="lastName"
                  fullWidth
                  inputProps={{ className: classes.input }}
                />
                <CreateIcon fontSize="small" className={classes.createIcon} />
              </FormGroup>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  helperText="Current mobile number"
                  name="telephone"
                  fullWidth
                  inputProps={{ className: classes.input }}
                />
                <CreateIcon fontSize="small" className={classes.createIcon} />
                <ErrorMessage
                  name="telephone"
                  render={(msg) => <Typography color="error">{msg}</Typography>}
                />
              </FormGroup>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  helperText="Current birthdate"
                  name="birthdate"
                  fullWidth
                  inputProps={{ className: classes.input }}
                />
                <CreateIcon fontSize="small" className={classes.createIcon} />
                <ErrorMessage
                  name="birthdate"
                  render={(msg) => <Typography color="error">{msg}</Typography>}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  className={classes.select}
                  component="select"
                  name="gender"
                  inputProps={{ className: classes.input }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
              </FormGroup>
              <Box className={Styles.btnWrapper}>
                <Button
                  disabled={isSubmitting || isValidating}
                  type="submit"
                  text="UPDATE DATA"
                  backgroundColor="#000000"
                  color="#FFFFFF"
                  onClick={() => {}}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      <Box className={Styles.btnWrapper}>
        <Button
          onClick={handleSignOut}
          type="button"
          backgroundColor="white"
          text="SIGN OUT"
          color="black"
        />
      </Box>
    </>
  );
}

function generateStyles({ breakpoints }) {
  return {
    input: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#373737',

      [breakpoints.up('desktop')]: {
        color: '#373737',
      },
    },
    formGroup: {
      position: 'relative',
    },
    createIcon: {
      position: 'absolute',
      right: '0',
    },
    select: {
      marginTop: '10px',
    },
  };
}

export default MyProfile;
