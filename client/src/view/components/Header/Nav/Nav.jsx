import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NavStyles from './Nav.module.scss';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

function Nav() {
  return (
    <Box className={NavStyles.nav}>
      <Grid container alignItems="center">
        <Grid item xs={5}>
          <Logo />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <NavItems />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Nav;
