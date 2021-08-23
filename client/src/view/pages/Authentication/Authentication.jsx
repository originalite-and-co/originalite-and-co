import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import Nav from '../../components/Header/Nav/Nav';
import AuthenticationContent from './AuthenticationContent/AuthenticationContent';
import Header from '../../components/Header/Header';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';

function Authentication() {
  const [isDesktop, setIsDesktop] = useState();
  const sizes = useWindowSize();

  useEffect(() => {
    sizes.width >= constants.WINDOW_DESKTOP_SIZE
      ? setIsDesktop(true)
      : setIsDesktop(false);
  }, [sizes]);

  const mobileHeader = (
    <>
      <Nav />
      <AuthenticationContent />
    </>
  );

  const desktopHeader = (
    <>
      <Header />
      <AuthenticationContent />
    </>
  );

  return (
    <Box data-testid="authentication">
      {!isDesktop && mobileHeader}
      {isDesktop && desktopHeader}
    </Box>
  );
}

export default Authentication;
