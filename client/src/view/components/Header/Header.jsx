import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav/Nav';
import CatalogNav from './CatalogNav/CatalogNav';
import HeaderStyles from './Header.module.scss';
import useWindowSize from "../../hooks/useWindowSize";
import constants from "../../constants";
import Logo from "./Nav/Logo/Logo";
import NavItems from "./Nav/NavItems/NavItems";

function Header() {
    const [isDesktop, setIsDesktop] = useState()
    const sizes = useWindowSize();

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE
            ? setIsDesktop(true)
            : setIsDesktop(false)
    }, [sizes])

    const mobileHeader =
        <>
            <Nav/>
            <CatalogNav/>
        </>

    const desktopHeader =
        <>
            <CatalogNav/>
            <Logo/>
            <NavItems/>
        </>

    return (
        <Box className={HeaderStyles.header}>
            {!isDesktop && mobileHeader}
            {isDesktop && desktopHeader}
        </Box>
    );
}

export default Header;
