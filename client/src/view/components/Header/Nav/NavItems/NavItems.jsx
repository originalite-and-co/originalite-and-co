import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import NavItemsStyles from './NavItems.module.scss';
import search from '../icons/search.svg';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from './BurgenMenu/Burger';
import SearchDropdown from '../dropdowns/SearchDropdown/SearchDropdown';
import AccountDropdown from '../dropdowns/AccountDropDown/AccountDropdown';
import BurgerDropdown from '../dropdowns/BurgerDropdown/BurgerDropdown';

function NavItems() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [accountToggle, setAccountToggle] = useState(false);
  const [burgerToggle, setBurgerToggle] = useState(false);

  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
    setAccountToggle(false);
    setBurgerToggle(false);
  };
  const toggleAccount = () => {
    setAccountToggle(!accountToggle);
    setSearchToggle(false);
    setBurgerToggle(false);
  };

  const toggleBurger = () => {
    setBurgerToggle(!burgerToggle);
    setSearchToggle(false);
    setAccountToggle(false);
  };
  return (
    <Box className={NavItemsStyles.navItemsGroup}>
      <Box className={NavItemsStyles.navItem} onClick={toggleSearch}>
        <Link to="/">
          <img src={search} alt="search" />
        </Link>
      </Box>
      <Box className={NavItemsStyles.navItem} onClick={toggleAccount}>
        <Link to="/">
          <img src={person} alt="person" />
        </Link>
      </Box>
      <Box className={NavItemsStyles.navItem}>
        <Link to="/">
          <img src={bag} alt="bag" />
        </Link>
      </Box>
      <Box>
        <Box onClick={toggleBurger}>
          <Link to="/">
            <Burger />
          </Link>
        </Box>
      </Box>
      <SearchDropdown searchToggle={searchToggle} />
      <AccountDropdown accountToggle={accountToggle} />
      <BurgerDropdown burgerToggle={burgerToggle} />
    </Box>
  );
}

export default NavItems;
