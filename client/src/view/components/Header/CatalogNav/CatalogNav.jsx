import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CatalogNavStyles from './CatalogNav.module.css';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function CatalogNav() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <StyledLink to="/">
            <h3 className={CatalogNavStyles.catalogNavItem}>women</h3>
          </StyledLink>
        </Grid>
        <Grid item xs={4}>
          <StyledLink to="/">
            <h3 className={CatalogNavStyles.catalogNavItem}>men</h3>
          </StyledLink>
        </Grid>
        <Grid item xs={4}>
          <StyledLink to="/">
            <h3 className={CatalogNavStyles.catalogNavItem}>accessory</h3>
          </StyledLink>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CatalogNav;
