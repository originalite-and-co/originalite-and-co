import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import CatalogNavDropdownStyles from './CatalogNavDropdown.module.scss';
import {useSelector} from "react-redux";
import {modalSelectors} from "../../../../../redux/features/modal";

Dropdown.propTypes = {
    onLeave: PropTypes.func.isRequired,
};

function Dropdown({onLeave, children}) {
    // const activeModal = useSelector(modalSelectors.modal)
    // const modalIsActive = activeModal.some(stateId => stateId === 'men-modal')
    const modalIsActive = true

    return (
        <Box className={modalIsActive ? CatalogNavDropdownStyles.active : CatalogNavDropdownStyles.closed}
             onMouseLeave={onLeave}
        >
            <Box className={CatalogNavDropdownStyles.list} data-testid="men-list">
                {children}
            </Box>
        </Box>
    );
}


export default Dropdown;
