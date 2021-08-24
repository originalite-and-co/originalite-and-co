import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import Nav from './Nav/Nav';
import CatalogNav from './CatalogNav/CatalogNav';
import useWindowSize from "../../hooks/useWindowSize";
import constants from "../../constants";
import Logo from "./Nav/Logo/Logo";
import NavItems from "./Nav/NavItems/NavItems";
import {makeStyles} from "@material-ui/styles";
import {generateStyles} from './HeaderStyles'

function Header() {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();

    const [isDesktop, setIsDesktop] = useState()
    const {width} = useWindowSize();

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    const mobileHeader =
        <>
            <Nav/>
        </>

    const desktopHeader =
        <>
            <CatalogNav/>
            <Logo/>
            <NavItems/>
        </>

    return (
        <Box className={classes.header}>
            <Box className={isDesktop
                ? `${classes.inner} wrapper`
                : classes.inner}
            >
                {!isDesktop && mobileHeader}
                {isDesktop && desktopHeader}
            </Box>
        </Box>
    );
}

export default Header;
