import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../Authentication.module.scss";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "../../../../components/Button/Button";
import {makeStyles} from "@material-ui/core/styles";

SignUpPage.propTypes = {

};

const useStyles = makeStyles({
    textField: {
        borderBottom: '1px solid white',
        color: '#FFFFFF !important',
    }
});

function SignUpPage(props) {
    const classes = useStyles()
    return (
        <Box className={Styles.signUpPageWrapper}>
            <p className={Styles.text}>Please enter your account details to sign up</p>
            <Box className={Styles.signUpGroup}>
                <TextField
                    required
                    fullWidth
                    label="First name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    required
                    fullWidth
                    label="Last name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    required
                    fullWidth
                    label="Login name"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    required
                    fullWidth
                    label="E-mail"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    required
                    fullWidth
                    label="Password"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    fullWidth
                    label="Mobile"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    fullWidth
                    label="Birthdate"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
                <TextField
                    fullWidth
                    label="Gender"
                    className={classes.textField}
                    InputLabelProps={{ className: Styles.textFieldLabel, }}
                    inputProps={{ className: Styles.textFieldInput, }}
                />
            </Box>
            <Box className={Styles.loginBtn}>
                <Button text="Sign Up" backgroundColor="#E5E5E5" color="#000000" />
            </Box>
        </Box>
    );
}

export default SignUpPage;