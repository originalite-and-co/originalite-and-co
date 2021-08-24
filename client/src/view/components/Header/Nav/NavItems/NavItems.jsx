import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import person from '../icons/person.svg';
import bag from '../icons/bag.svg';
import Burger from '../BurgenMenu/Burger';
import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";
import Search from "../Search/Search";
import useWindowSize from "../../../../hooks/useWindowSize";
import constants from "../../../../constants";
import {makeStyles} from "@material-ui/styles";
import {generateStyles} from "./NavItemsStyles";

function NavItems() {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();

    const [isDropdownActive, setActiveDropdown] = useState(false);
    const dispatch = useDispatch()
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    const [isDesktop, setIsDesktop] = useState()
    const {width} = useWindowSize();

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    useEffect(() => {
        if (!isAnyDropdownOpen) {
            setActiveDropdown(false)
        }
    }, [isAnyDropdownOpen, isDropdownActive]);

    return (
        <Box className={classes.navItemsGroup} data-testid="navItems">
            <Search/>
            <Box className={classes.navItem}>
                <Link to="/member">
                    <Box component="div" className={classes.imageWrapper}>
                        <img className={classes.icon} src={person} alt="person"/>
                        {isDesktop && <p>My account</p>}
                    </Box>
                </Link>
            </Box>
            <Box className={classes.navItem}>
                <Link to="/cart">
                    <Box component="div" className={classes.imageWrapper}>
                        <img className={classes.icon} src={bag} alt="bag"/>
                        {isDesktop && <p>Shopping bag</p>}
                    </Box>
                </Link>
            </Box>
            {!isDesktop && <Box>
                <Box data-testid="burger">
                    <Burger/>
                </Box>
            </Box>}
        </Box>
    );
}

export default NavItems;
