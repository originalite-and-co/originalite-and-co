import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav/Nav';
import CatalogNav from './CatalogNav/CatalogNav';
import HeaderStyles from './Header.module.scss';

function Header() {

    return (
        <Box className={HeaderStyles.header}>
            <Grid container>
                <Grid item xs={12}>
                    <Nav/>
                </Grid>
                <Grid item xs={12}>
                    <CatalogNav/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
