import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import CatalogNavStyles from './CatalogNav.module.css';
import WomenDropdown from './Dropdowns/WomenDropdown';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from '././.././.././../constants';
import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'

function CatalogNav() {
    const sizes = useWindowSize()
    const [isDesktop, setIsDesktop] = useState();
    const [womenToggle, setWomenToggle] = useState(false);

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE ? setIsDesktop(true) : setIsDesktop(false)
    }, [])

    const handleWomenBtnClick = () => {
        setWomenToggle(!womenToggle);
    };

    return (
        <Box className={CatalogNavStyles.catalogNavWrapper}>
            <Box>
                {isDesktop
                    ?
                    <CatalogNavLink
                        pathTo="/"
                        onHoverFunc={handleWomenBtnClick}
                        styles={womenToggle ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                        text="women"/>
                    :
                    <CatalogNavButton
                        onClickFunc={handleWomenBtnClick}
                        styles={womenToggle ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                        text="women"/>
                }
            </Box>
            <Box>
                <Link to="/">
                    <button type="button" className={CatalogNavStyles.NavItemBtnInactive}>men</button>
                </Link>
            </Box>
            <Box>
                <Link to="/">
                    <button type="button" className={CatalogNavStyles.NavItemBtnInactive}>accessory</button>
                </Link>
            </Box>
            {womenToggle && <WomenDropdown
                womenToggle={womenToggle}
                onLeave={handleWomenBtnClick}/>}
        </Box>
    );
}

export default CatalogNav;
