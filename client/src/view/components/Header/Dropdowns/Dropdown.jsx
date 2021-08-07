import React from 'react';
import PropTypes from 'prop-types';
import CatalogNavDropdownStyles from './CatalogNavDropdown.module.scss';
import {useSelector} from "react-redux";
import {modalSelectors} from "../../../../redux/features/modal";
import {List,Box} from '@material-ui/core'

Dropdown.propTypes = {
    onLeave: PropTypes.func.isRequired,
};

function Dropdown({onLeave, children, isActive}) {

    return (
        <Box className={isActive ? CatalogNavDropdownStyles.active : CatalogNavDropdownStyles.closed}
             onMouseLeave={onLeave}
        >
            <Box component="nav">
                <List className={CatalogNavDropdownStyles.list} data-testid="men-list">
                    {children}
                </List>
            </Box>
        </Box>
    );
}


export default Dropdown;
