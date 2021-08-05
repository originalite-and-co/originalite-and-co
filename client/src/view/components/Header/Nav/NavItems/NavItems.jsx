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

function NavItems() {

  const [searchToggle, setSearchToggle] = useState(false);
  const [burgerToggle, setBurgerToggle] = useState(false);

  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
    setBurgerToggle(false);
  };

  const toggleBurger = () => {
    setBurgerToggle(!burgerToggle);
    setSearchToggle(false);
  };
  return (
    <Box className={NavItemsStyles.navItemsGroup}>
      <Box className={NavItemsStyles.navItem} onClick={toggleSearch}>
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
        <Box onClick={toggleBurger}>
            <Burger />
        </Box>
      </Box>
      <SearchDropdown searchToggle={searchToggle} />
      <BurgerDropdown burgerToggle={burgerToggle} />
    </Box>
  );
}

export default NavItems;
