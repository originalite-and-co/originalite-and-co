import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Nav from './Nav/Nav';
import CatalogNav from './CatalogNav/CatalogNav';
<<<<<<< HEAD
import HeaderStyles from './Header.module.scss';
=======
>>>>>>> origin/develop
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import Logo from './Nav/Logo/Logo';
import NavItems from './Nav/NavItems/NavItems';
<<<<<<< HEAD

function Header() {
  const [isDesktop, setIsDesktop] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const mobileHeader = (
    <>
      <Nav />
      <CatalogNav />
    </>
  );

  const desktopHeader = (
    <>
      <CatalogNav />
      <Logo />
      <NavItems />
    </>
  );

  return (
    <Box className={HeaderStyles.header}>
      <Box
        className={
          isDesktop ? `${HeaderStyles.inner} wrapper` : HeaderStyles.inner
        }
      >
=======
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './HeaderStyles';

function Header() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const [isDesktop, setIsDesktop] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const mobileHeader = (
    <>
      <Nav />
    </>
  );

  const desktopHeader = (
    <>
      <CatalogNav />
      <Logo />
      <NavItems />
    </>
  );

  return (
    <Box className={classes.header}>
      <Box className={isDesktop ? `${classes.inner} wrapper` : classes.inner}>
>>>>>>> origin/develop
        {!isDesktop && mobileHeader}
        {isDesktop && desktopHeader}
      </Box>
    </Box>
  );
}

export default Header;
