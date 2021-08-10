import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styles from "../Authentication.module.scss";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "../../../../components/Button/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Form, Formik, Field, va, ErrorMessage} from 'formik'
import styled from "styled-components";
import {object, string} from "yup";
import {FormGroup, Typography} from "@material-ui/core";
import {customerRequests} from "../../../../../api/server";
import useAsyncError from "../../../../hooks/useAsyncError";
import {Link, useHistory} from "react-router-dom";
import Toast from "../../../../components/Toast/Toast";

LoginPage.propTypes = {};


const useStyles = makeStyles({
    textField: {
        borderBottom: '1px solid white',
        color: '#FFFFFF !important',
    }
});

const initialValues = {
    loginOrEmail: "",
    password: ""
}

function LoginPage(props) {
    const classes = useStyles()
    const throwAsyncError = useAsyncError()
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false)

    const forwardIfAuthorized = async () => {
        const isAuthorized = await sessionStorage.getItem('token')
        if (isAuthorized){
            setTimeout(() => {
                history.push('/')
            },1500)
        }
    }


    return (
        <>{loggedIn && <Toast message="Welcome to Originalite, fashionista"/>}
        <Box className={Styles.logInPageWrapper}>
            <p className={Styles.text}>Please enter your account details to log in</p>
            <Formik
                validationSchema={
                    object({
                        loginOrEmail: string().email().required("Email is a required field"),
                        password: string().required("Password is a required field")
                    })
                }
                initialValues={initialValues}
                onSubmit={(values) => {
                    customerRequests.logIn(values)
                        .then(setLoggedIn(true))
                        .then(forwardIfAuthorized)
                        .catch(error => throwAsyncError(error))
                    console.log(values)
                }}
            >
                {({values, errors, touched,isSubmitting,isValidating}) => (
                    <Form>
                        <Box className={Styles.loginGroup}>
                            <FormGroup>
                                <Field name="loginOrEmail" as={TextField}
                                       required
                                       fullWidth
                                       label="E-mail"
                                       className={classes.textField}
                                       InputLabelProps={{className: Styles.textFieldLabel,}}
                                       inputProps={{className: Styles.textFieldInput,}}
                                />
                                <ErrorMessage name="loginOrEmail" render={msg => <Typography color="error">{msg}</Typography> }/>
                            </FormGroup>
                            <FormGroup>
                                <Field name="password" type="password" as={TextField}
                                       required
                                       fullWidth
                                       label="Password"
                                       className={classes.textField}
                                       InputLabelProps={{className: Styles.textFieldLabel,}}
                                       inputProps={{className: Styles.textFieldInput,}}
                                />
                                <ErrorMessage name="password" render={msg => <Typography color="error">{msg}</Typography> }/>
                            </FormGroup>
                        </Box>
                        <Box className={Styles.loginBtn}>
                            <Button disabled={isSubmitting || isValidating} type="submit" text="LOG IN" backgroundColor="#E5E5E5" color="#000000" onClick={()=>{}}/>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
        </>
    );
}

export default LoginPage;