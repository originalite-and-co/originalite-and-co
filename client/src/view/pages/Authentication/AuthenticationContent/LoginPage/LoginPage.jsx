import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../Authentication.module.scss";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "../../../../components/Button/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Form, Formik, Field, va, ErrorMessage} from 'formik'
import styled from "styled-components";
import {object,string} from "yup";
import {FormGroup} from "@material-ui/core";
import {customerRequests} from "../../../../../api/server";

LoginPage.propTypes = {
    
};


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

    const fn = () => {
        console.log('hey')
    }

    return (
        <Box className={Styles.logInPageWrapper}>
            <p className={Styles.text}>Please enter your account details to log in</p>
            <Formik
                validationSchema={
                    object({
                        loginOrEmail: string().email().required(),
                        password: string().required()
                    })
                }
                initialValues={initialValues} onSubmit={(values, formikHelpers) => {
                    customerRequests.logIn(values)
                console.log(values);
                console.log(formikHelpers)
            }}>
                {({ values ,errors, touched}) => (
                    <Form>
                        <Box className={Styles.loginGroup}>
                            <FormGroup>
                                <Field name="loginOrEmail" as={TextField}
                                       required
                                       fullWidth
                                       label="E-mail"
                                       className={classes.textField}
                                       InputLabelProps={{ className: Styles.textFieldLabel, }}
                                       inputProps={{ className: Styles.textFieldInput, }}
                                />
                                <ErrorMessage name="loginOrEmail"/>
                            </FormGroup>
                            <FormGroup>
                                <Field name="password" type="password" as={TextField}
                                       required
                                       fullWidth
                                       label="Password"
                                       className={classes.textField}
                                       InputLabelProps={{ className: Styles.textFieldLabel, }}
                                       inputProps={{ className: Styles.textFieldInput, }}
                                />
                                <ErrorMessage name="password"/>
                            </FormGroup>
                        </Box>
                        <Box className={Styles.loginBtn}>
                            <Button type="submit" text="LOG IN" backgroundColor="#E5E5E5" color="#000000" onClick={fn}/>
                        </Box>
                        <pre>{JSON.stringify(errors,null,4)}</pre>
                        <pre>{JSON.stringify(values,null,4)}</pre>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default LoginPage;