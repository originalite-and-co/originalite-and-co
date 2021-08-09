import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import BurgerDropdownStyles from './BurgerDropdown.module.scss';
import { ListItem, ListItemUpper } from './ListItem';
import Social from './Social/Social';

function BurgerDropdown() {

  return (
    <Box className={false ? BurgerDropdownStyles.active : BurgerDropdownStyles.closed}>
        <Box className={BurgerDropdownStyles.auth}>
          <button type="button" className={BurgerDropdownStyles.btn}>Log In /</button>
          <button type="button" className={BurgerDropdownStyles.btn}>Sign Up</button>
        </Box>
        <Box className={BurgerDropdownStyles.list}>
          <ListItem text="New collection" />
          <ListItem text="New arrivals" />
          <ListItemUpper text="women collection" />
          <ListItemUpper text="men collection" />
          <ListItemUpper text="accessory" />
        </Box>
        <Social />
    </Box>
  );
}

export default BurgerDropdown;
