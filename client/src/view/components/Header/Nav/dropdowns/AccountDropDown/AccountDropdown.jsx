import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import AccountDropdownStyles from './AccountDropdown.module.scss';
import Button from '../../../../Button/Button';

const useStyles = makeStyles({
  textField: {
    borderBottom: '1px solid white',
  },
  inputBase: {
    borderBottom: '1px solid white',
    height: '6vh',
  },
});

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
function AccountDropdown({ accountToggle, }) {
  const classes = useStyles();

  return (
    <Box className={accountToggle ? AccountDropdownStyles.active : AccountDropdownStyles.closed}>
      <Box>
        <Box className={AccountDropdownStyles.accountBtns}>
          <button type="button" className={AccountDropdownStyles.logInSignUp}>Log In</button>
          <button type="button" className={AccountDropdownStyles.logInSignUp}>Sign Up</button>
        </Box>
        <p className={AccountDropdownStyles.text}>Please enter your account details to log in</p>
        <Box className={AccountDropdownStyles.textFieldsGroup}>
          <TextField
            fullWidth
            label="E-mail"
            className={classes.textField}
            InputLabelProps={{ className: AccountDropdownStyles.textField, }}
            inputProps={{ className: AccountDropdownStyles.test, }}
          />
          <InputBase
            placeholder="E-mail"
            className={classes.inputBase}
          />
          <TextField
            InputLabelProps={{ className: AccountDropdownStyles.textField, }}
            fullWidth
            label="Password"
          />
        </Box>
        <Box className={AccountDropdownStyles.loginBtn}>
          <Button text="LOG IN" backgroundColor="#E5E5E5" color="#000000" />
        </Box>
      </Box>
    </Box>
  );
}

export default AccountDropdown;
