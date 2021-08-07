import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import NavItemsStyles from './NavItems.module.scss';
import search from '../icons/search.svg';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from './BurgenMenu/Burger';
import BurgerDropdown from '../dropdowns/BurgerDropdown/BurgerDropdown';
import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";
import Search from "../Search/Search";

function NavItems() {
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const dispatch = useDispatch()
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    useEffect(() => {
        if (!isAnyDropdownOpen) {
            setActiveDropdown(false)
        }
    }, [isAnyDropdownOpen, isDropdownActive]);

    return (
        <Box className={NavItemsStyles.navItemsGroup} data-testid="navItems">
            <Search/>
            <Box className={NavItemsStyles.navItem}>
                <Link to="/member">
                    <img src={person} alt="person"/>
                </Link>
            </Box>
            <Box className={NavItemsStyles.navItem}>
                <Link to="/cart">
                    <img src={bag} alt="bag"/>
                </Link>
            </Box>
            <Box>
                <Box data-testid="burger">
                    <Burger/>
                </Box>
            </Box>
            <BurgerDropdown/>
        </Box>
    );
}

export default NavItems;
