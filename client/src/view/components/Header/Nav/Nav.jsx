import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import NavStyles from './Nav.module.scss';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants";


function Nav() {
    const [isDesktop, setIsDesktop] = useState()
    const sizes = useWindowSize();

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE
            ? setIsDesktop(true)
            : setIsDesktop(false)
    }, [sizes])

    /*Should it be desktop, the Nav component will not be shown in the way it's built here. Instead, the Logo and NavItems will serve as direct children of Header*/
    return (
        <>
            {!isDesktop && <Box className={NavStyles.nav} data-testid="nav">
                <Logo/>
                <NavItems/>
            </Box>}
        </>

    );
}

export default Nav;
