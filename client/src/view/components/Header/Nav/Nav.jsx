import React from 'react';
import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
import NavStyles from './Nav.module.scss';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

function Nav() {
  return (
    <Box className={NavStyles.nav} data-testid="nav">
      <Logo />
      <NavItems />
    </Box>
  );
}

export default Nav;
