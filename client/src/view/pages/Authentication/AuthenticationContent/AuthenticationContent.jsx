import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Styles from './Authentication.module.scss';
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";
import Toast from "../../../components/Toast/Toast";

function AuthenticationContent() {


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

  const handleSignUpClick = () => {
    setLoginClicked(true)
    setSignupClicked(false)
  }

  return (
    <Box className={Styles.container} data-testid="authentication-content">
      <Box className={Styles.wrapper}>
        <Box className={Styles.accountBtns} data-testid="account-btns">
          <button type="button" className={`${loginClicked && Styles.active} ${Styles.logInSignUp}`} onClick={handleloginOptionClick} data-testid='logsign-btns'>Log In</button>
          <button type="button" className={`${signupClicked && Styles.active} ${Styles.logInSignUp}`} onClick={handleSignupClick} data-testid='logsign-btns'>Sign Up</button>
        </Box>
        <ErrorBoundary fallback={<Toast message={"Wrong Credentials"} />}>
          {loginClicked && <LoginPage/>}
          {signupClicked && <SignUpPage onClick={handleSignUpClick}/>}
        </ErrorBoundary>
      </Box>
    </Box>
  );
}

export default AuthenticationContent;
