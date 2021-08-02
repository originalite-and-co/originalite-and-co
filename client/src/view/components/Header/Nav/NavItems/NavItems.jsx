import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import NavItemsStyles from './NavItems.module.scss';
import search from '../icons/search.svg';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from './BurgenMenu/Burger';

function NavItems() {
  return (
    <Box className={NavItemsStyles.navItemsGroup}>
      <Link to="/">
        <Box className={NavItemsStyles.navItem}>
          <img src={search} alt="search" />
        </Box>
      </Link>
      <Link to="/">
        <Box className={NavItemsStyles.navItem}>
          <img src={person} alt="person" />
        </Box>
      </Link>
      <Link to="/">
        <Box className={NavItemsStyles.navItem}>
          <img src={bag} alt="bag" />
        </Box>
      </Link>
      <Link to="/">
        <Burger />
      </Link>
    </Box>
  );
}

export default NavItems;
