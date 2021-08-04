import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountDropdownStyles from './AccountDropdown.module.scss';
import Button from '../../../../Button/Button';

const useStyles = makeStyles({
  textField: {
    borderBottom: '1px solid white',
    color: '#FFFFFF !important',
  },
  btns: {
    borderBottom: '1px solid #E5E5E5',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '18px',
    lineHeight: '18px',
    color: '#E5E5E5',
    width: '109px',
    backgroundColor: 'black',
    paddingBottom: '4px',
    border: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
});

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
function AccountDropdown({ accountToggle, }) {
  const classes = useStyles();

  const [loginClicked, setLoginClicked] = useState(true);
  const [signupClicked, setSignupClicked] = useState(false);

  const handleloginOptionClick = () => {
    setSignupClicked(false);
    if (loginClicked) {
      return;
    }
    setLoginClicked(!loginClicked);
  };
  const handleSignupClick = () => {
    setLoginClicked(false);
    if (signupClicked) {
      return;
    }
    setSignupClicked(!signupClicked);
  };

  return (
    <Box className={accountToggle ? AccountDropdownStyles.active : AccountDropdownStyles.closed}>
      <Box>
        <Box className={AccountDropdownStyles.accountBtns}>
          <button type="button" className={loginClicked ? classes.btns : AccountDropdownStyles.logInSignUp} onClick={handleloginOptionClick}>Log In</button>
          <button type="button" className={signupClicked ? classes.btns : AccountDropdownStyles.logInSignUp} onClick={handleSignupClick}>Sign Up</button>
        </Box>
        <p className={AccountDropdownStyles.text}>Please enter your account details to log in</p>
        <Box className={AccountDropdownStyles.textFieldsGroup}>
          <TextField
            required
            fullWidth
            label="E-mail"
            className={classes.textField}
            InputLabelProps={{ className: AccountDropdownStyles.textFieldLabel, }}
            inputProps={{ className: AccountDropdownStyles.textFieldInput, }}
          />
          <TextField
            required
            fullWidth
            label="Password"
            className={classes.textField}
            InputLabelProps={{ className: AccountDropdownStyles.textFieldLabel, }}
            inputProps={{ className: AccountDropdownStyles.textFieldInput, }}
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
