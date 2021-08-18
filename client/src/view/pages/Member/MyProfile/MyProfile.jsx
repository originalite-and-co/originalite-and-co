import React from 'react';
import PropTypes from 'prop-types';
import {customerRequests} from "../../../../api/server";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Box from "@material-ui/core/Box";
import {FormGroup, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/Button/Button";
import useAsyncError from "../../../hooks/useAsyncError";
import Styles from './../Member.module.scss'
import {number, object, string} from 'yup'

MyProfile.propTypes = {
    customer: PropTypes.object.isRequired,
    handleDataUpdate: PropTypes.func.isRequired
};

function MyProfile({customer,handleDataUpdate}) {
    const throwError = useAsyncError();

    const initialValues = {
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        mobilePhone: customer.telephone,
        birthday: customer.birthdate,
    }

    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    return (
        <>
        <Formik
            validationSchema={
                object({
                    email: string().email('Must be a valid email'),
                    mobilePhone: string().matches(phoneRegExp, 'Phone number is not valid')
                })
            }
            initialValues={initialValues} onSubmit={(values) => {
                if (JSON.stringify(values) === JSON.stringify(initialValues)){
                    return
                }
            customerRequests.updateCustomer(values)
                .then(handleDataUpdate())
                .catch(error => throwError(error))
        }}
        >
            {({values,errors,touched,isSubmitting,isValidating}) => (
                <Form>
                    <Box className={Styles.logInPageWrapper}>
                        <FormGroup>
                            <Field as={TextField}
                                   helperText="Current email address"
                                   name="email"
                                   fullWidth
                            />
                            <ErrorMessage name="email"
                                          render={msg => <Typography color="error">{msg}</Typography>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field as={TextField}
                                   helperText="Current name"
                                   name="firstName"
                                   fullWidth
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field as={TextField}
                                   helperText="Current last name"
                                   name="lastName"
                                   fullWidth
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field as={TextField}
                                   helperText="Current mobile number"
                                   name="mobilePhone"
                                   fullWidth
                            />
                            <ErrorMessage name="mobilePhone"
                                          render={msg => <Typography color="error">{msg}</Typography>}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field as={TextField}
                                   helperText="Current birthdate"
                                   name="birthday"
                                   fullWidth
                            />
                            <ErrorMessage name="birthday"
                                          render={msg => <Typography color="error">{msg}</Typography>}
                            />
                        </FormGroup>
                        <Box className={Styles.btnWrapper}>
                            <Button disabled={isSubmitting || isValidating} type="submit" text="UPDATE DATA"
                                    backgroundColor="#000000" color="#FFFFFF" onClick={() => {
                            }}/>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
        </>
    );
}

export default MyProfile;