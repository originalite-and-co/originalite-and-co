import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import NavStyles from './Nav.module.scss';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants";


function Nav() {
    const [isDesktop, setIsDesktop] = useState()
    const {width} = useWindowSize();

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    /*Should it be desktop, the Nav component will not be shown in the way it's built here. Instead, the Logo and NavItems will serve as direct children of Header*/
    return (
        <>
            {!isDesktop && <Box className={NavStyles.nav} data-testid="nav">
                <Box className={`${NavStyles.inner} wrapper`}>
                    <Logo/>
                    <NavItems/>
                </Box>
            </Box>}
        </>

    );
}

export default Nav;
