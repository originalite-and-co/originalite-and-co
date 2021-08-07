import React,{useState} from 'react';
import {Box, List} from "@material-ui/core";
import HeaderDropdownStyles from './HeaderDropdown.module.scss'



function HeaderDropdown({styles,isActive,children,onLeave}) {

    return (
        <Box className={`${isActive ? HeaderDropdownStyles.active : HeaderDropdownStyles.closed} ${styles}`} onMouseLeave={onLeave}>
            <Box component="nav">
                <List className={HeaderDropdownStyles.list} data-testid="men-list">
                    {children}
                </List>
            </Box>
        </Box>
    );
}

export default HeaderDropdown;