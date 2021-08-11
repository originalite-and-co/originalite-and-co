import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderDropdown.module.scss';
import {List,Box} from '@material-ui/core'

HeaderDropdown.propTypes = {
    classNames: PropTypes.shape({
        active: PropTypes.string,
        closed: PropTypes.string
    }),
    onMouseLeave: PropTypes.func,
    children: PropTypes.element,
    isActive: PropTypes.bool,
    lockBodyScrolling: PropTypes.bool
};

HeaderDropdown.defaultProps = {
    lockBodyScrolling: false
}

function HeaderDropdown(
    {
        classNames,
        onMouseLeave,
        children,
        isActive,
        lockBodyScrolling,
    }
) {

    if(lockBodyScrolling){
        isActive ? document.body.classList.add('lock-scroll') : document.body.classList.remove('lock-scroll');
    }

    return (
        <Box className={
            isActive
                ? `${styles.dropdown} ${styles.active} ${classNames.active} ${classNames.closed}`
                : `${styles.dropdown} ${classNames.closed}`}
             onMouseLeave={onMouseLeave}
        >
            {children}
        </Box>
    );
}


export default HeaderDropdown;
