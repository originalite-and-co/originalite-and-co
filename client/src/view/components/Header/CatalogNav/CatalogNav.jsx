import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CatalogNavStyles from './CatalogNav.module.css';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function CatalogNav() {
  return (
    <Box className={CatalogNavStyles.catalogNavWrapper}>
      <Box>
        <StyledLink to="/">
          <h3 className={CatalogNavStyles.catalogNavItem}>women</h3>
        </StyledLink>
      </Box>
      <Box>
        <StyledLink to="/">
          <h3 className={CatalogNavStyles.catalogNavItem}>men</h3>
        </StyledLink>
      </Box>
      <Box>
        <StyledLink to="/">
          <h3 className={CatalogNavStyles.catalogNavItem}>accessory</h3>
        </StyledLink>
      </Box>
    </Box>
  );
}

export default CatalogNav;
