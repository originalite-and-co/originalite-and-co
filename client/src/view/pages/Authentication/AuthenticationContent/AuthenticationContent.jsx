import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Styles from './Authentication.module.scss';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import ErrorBoundary from '../../../HOC/ErrorBoundary/ErrorBoundary';
import Toast from '../../../components/Toast/Toast';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';

function AuthenticationContent() {
  const { section } = useParams();
  const { url } = useRouteMatch();
  const { replace, goBack } = useHistory();
  const [activeSection, setActiveSection] = useState(section);
  const [loginClicked, setLoginClicked] = useState(section === 'login');
  const [signupClicked, setSignupClicked] = useState(section === 'signup');

  useEffect(() => {
    setActiveSection(section);
  }, [section]);

  const handleloginOptionClick = () => {
    const pageUrl = url.replace(section, 'login');
    replace(pageUrl);

    setSignupClicked(false);
    if (loginClicked) {
      return;
    }
    setLoginClicked(!loginClicked);
  };
  const handleSignupClick = () => {
    const pageUrl = url.replace(section, 'signup');
    replace(pageUrl);
    setLoginClicked(false);
    if (signupClicked) {
      return;
    }
    setSignupClicked(!signupClicked);
  };

  const handleSignUpClick = () => {
    setLoginClicked(true);
    setSignupClicked(false);
  };

  return (
    <Box className={Styles.container} data-testid="authentication-content">
      <Box className={Styles.wrapper}>
        <Box className={Styles.accountBtns} data-testid="account-btns">
          <button
            type="button"
            className={`${loginClicked && Styles.active} ${Styles.logInSignUp}`}
            onClick={handleloginOptionClick}
            data-testid="logsign-btns"
          >
            Log In
          </button>
          <button
            type="button"
            className={`${signupClicked && Styles.active} ${
              Styles.logInSignUp
            }`}
            onClick={handleSignupClick}
            data-testid="logsign-btns"
          >
            Sign Up
          </button>
        </Box>
        <ErrorBoundary
          renderChildren
          fallback={
            <Toast
              severity="error"
              variant="filled"
              message={'Wrong Credentials'}
            />
          }
        >
          {activeSection === 'login' && <LoginPage goBack={goBack} />}
          {activeSection === 'signup' && (
            <SignUpPage onClick={handleSignUpClick} />
          )}
        </ErrorBoundary>
      </Box>
    </Box>
  );
}

export default AuthenticationContent;
