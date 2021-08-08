import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import NavItemsStyles from './NavItems.module.scss';
import search from '../icons/search.svg';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from '../BurgenMenu/Burger';
import BurgerDropdown from '../BurgerDropdown/BurgerDropdown';
import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";
import Search from "../Search/Search";
import useWindowSize from "../../../../hooks/useWindowSize";
import constants from "../../../../constants";

function NavItems() {
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const dispatch = useDispatch()
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    const [isDesktop, setIsDesktop] = useState()
    const sizes = useWindowSize();

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE
            ? setIsDesktop(true)
            : setIsDesktop(false)
    }, [])

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
                    <Box component="div" className={NavItemsStyles.imageWrapper}>
                        <img className={NavItemsStyles.icon} src={person} alt="person"/>
                        {isDesktop && <p>My account</p>}
                    </Box>
                </Link>
            </Box>
            <Box className={NavItemsStyles.navItem}>
                <Link to="/cart">
                    <Box component="div" className={NavItemsStyles.imageWrapper}>
                        <img className={NavItemsStyles.icon} src={bag} alt="bag"/>
                        {isDesktop && <p>Shopping bag</p>}
                    </Box>
                </Link>
            </Box>
            {!isDesktop && <Box>
                <Box data-testid="burger">
                    <Burger/>
                </Box>
            </Box>}
            {/*<BurgerDropdown/>*/}
        </Box>
    );
}

export default NavItems;
