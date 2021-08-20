import React from 'react';
import PropTypes from 'prop-types';
import {customerRequests} from "../../../../api/server";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {makeStyles} from "@material-ui/styles";
import CreateIcon from '@material-ui/icons/Create';

import {
    FormGroup,
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    TextField,
    Checkbox
}
    from "@material-ui/core";

import Button from "../../../components/Button/Button";
import useAsyncError from "../../../hooks/useAsyncError";
import Styles from './../Member.module.scss'
import {object, string} from 'yup'
import {useDispatch} from "react-redux";
import {authorizeOperations} from "../../../../redux/features/authorization";

MyProfile.propTypes = {
    customer: PropTypes.object.isRequired,
    handleDataUpdate: PropTypes.func.isRequired
};

const useStyles = makeStyles(generateStyles);

function MyProfile({customer, handleDataUpdate}) {
    const throwError = useAsyncError();

    const classes = useStyles();

    const [gender, setGender] = React.useState(customer.gender);

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const initialValues = {
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        mobilePhone: customer.telephone,
        birthday: customer.birthdate,
        gender: customer.gender
    }

    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(authorizeOperations.loggOutUser());
    };

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
                if (JSON.stringify(values) === JSON.stringify(initialValues)) {
                    return
                }
                customerRequests.updateCustomer(values)
                    .then(handleDataUpdate())
                    .catch(error => throwError(error))
            }}
            >
                {({values, errors, touched, isSubmitting, isValidating}) => (
                    <Form>
                        <Box>
                            <FormGroup className={classes.formGroup}>
                                <Field as={TextField}
                                       helperText="Current email address"
                                       name="email"
                                       fullWidth
                                       inputProps={{className: classes.test}}
                                />
                                <CreateIcon fontSize="small" className={classes.createIcon}/>
                                <ErrorMessage name="email"
                                              render={msg => <Typography color="error">{msg}</Typography>}
                                />
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                                <Field as={TextField}
                                       helperText="Current name"
                                       name="firstName"
                                       fullWidth
                                       inputProps={{className: classes.test}}
                                />
                                <CreateIcon fontSize="small" className={classes.createIcon}/>
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                                <Field as={TextField}
                                       helperText="Current last name"
                                       name="lastName"
                                       fullWidth
                                       inputProps={{className: classes.test}}
                                />
                                <CreateIcon fontSize="small" className={classes.createIcon}/>
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                                <Field as={TextField}
                                       helperText="Current mobile number"
                                       name="mobilePhone"
                                       fullWidth
                                       inputProps={{className: classes.test}}
                                />
                                <CreateIcon fontSize="small" className={classes.createIcon}/>
                                <ErrorMessage name="mobilePhone"
                                              render={msg => <Typography color="error">{msg}</Typography>}
                                />
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                                <Field as={TextField}
                                       helperText="Current birthdate"
                                       name="birthday"
                                       fullWidth
                                       inputProps={{className: classes.test}}
                                />
                                <CreateIcon fontSize="small" className={classes.createIcon}/>
                                <ErrorMessage name="birthday"
                                              render={msg => <Typography color="error">{msg}</Typography>}
                                />
                            </FormGroup>
                            {/*<FormGroup>*/}
                            {/*    <FormControl component="fieldset">*/}
                            {/*        <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange}>*/}
                            {/*            <FormControlLabel value="female" control={<Radio />} label="Female" />*/}
                            {/*            <FormControlLabel value="male" control={<Radio />} label="Male" />*/}
                            {/*        </RadioGroup>*/}
                            {/*    </FormControl>*/}
                            {/*</FormGroup>*/}
                            <Box className={Styles.btnWrapper}>
                                <Button disabled={isSubmitting || isValidating} type="submit" text="UPDATE DATA"
                                        backgroundColor="#000000" color="#FFFFFF" onClick={() => {
                                }}/>
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
                color="black"/>
            </Box>
        </>
    );
}

function generateStyles({breakpoints}) {
    return {
        test: {
            fontFamily: "Open Sans",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "16px",
            color: "#373737",

            [breakpoints.up("desktop")]: {
                color: "#373737",
            },
        },
        formGroup: {
            position: "relative"
        },
        createIcon: {
            position: "absolute",
            right: "0"
        }
    }
}

export default MyProfile;