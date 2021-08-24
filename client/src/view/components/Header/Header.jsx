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
    const {width} = useWindowSize();

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    const mobileHeader =
        <>
            <Nav/>
            {/*<CatalogNav/>*/}
        </>

    const desktopHeader =
        <>
            <CatalogNav/>
            <Logo/>
            <NavItems/>
        </>

    return (
        <Box className={HeaderStyles.header}>
            <Box className={isDesktop
                ? `${HeaderStyles.inner} wrapper`
                : HeaderStyles.inner}
            >
                {!isDesktop && mobileHeader}
                {isDesktop && desktopHeader}
            </Box>
        </Box>
    );
}

export default Header;
