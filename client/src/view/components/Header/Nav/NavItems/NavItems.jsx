import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import NavItemsStyles from './NavItems.module.scss';
import search from '../icons/search.svg';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from './BurgenMenu/Burger';
import SearchDropdown from '../dropdowns/SearchDropdown/SearchDropdown';
import BurgerDropdown from '../dropdowns/BurgerDropdown/BurgerDropdown';
import {useDispatch} from "react-redux";
import {modalOperations} from "../../../../../redux/features/modal";

function NavItems() {

    const dispatch = useDispatch()

  const toggleSearch = () => {
      dispatch(modalOperations.toggleModal("search-modal"))
  };

  const toggleBurger = () => {
      dispatch(modalOperations.toggleModal("burger-modal"))
  };

  return (
    <Box className={NavItemsStyles.navItemsGroup} data-testid="navItems">
      <Box className={NavItemsStyles.navItem} onClick={toggleSearch} data-testid="nav-item-search">
          <img src={search} alt="search" />
      </Box>
      <Box className={NavItemsStyles.navItem}>
        <Link to="/member">
          <img src={person} alt="person" />
        </Link>
      </Box>
      <Box className={NavItemsStyles.navItem}>
        <Link to="/cart">
          <img src={bag} alt="bag" />
        </Link>
      </Box>
      <Box>
        <Box onClick={toggleBurger} data-testid="burger">
            <Burger />
        </Box>
      </Box>
      <SearchDropdown/>
      <BurgerDropdown/>
    </Box>
  );
}

export default NavItems;
