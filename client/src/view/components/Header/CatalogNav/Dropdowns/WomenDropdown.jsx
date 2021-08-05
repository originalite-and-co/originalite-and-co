import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import WomenDropdownStyles from './WomenDropdown.module.scss';
import ListItemWomen from './ListItemWomen';

function WomenDropdown({ womenToggle, onLeave}) {
  return (
    <Box className={womenToggle ? WomenDropdownStyles.active : WomenDropdownStyles.closed}
         onMouseLeave={onLeave}
    >
        <Box className={WomenDropdownStyles.list}>
          <ListItemWomen text="View all" />
          <ListItemWomen text="New arrivals" />
          <ListItemWomen text="Dresses" />
          <ListItemWomen text="Knitwear" />
          <ListItemWomen text="Coats" />
          <ListItemWomen text="Jackets" />
          <ListItemWomen text="Suits & Combined" />
          <ListItemWomen text="T-shirts" />
          <ListItemWomen text="Jeans" />
          <ListItemWomen text="Skirts" />
          <ListItemWomen text="Underwear" />
        </Box>
    </Box>
  );
}

WomenDropdown.propTypes = {
  womenToggle: PropTypes.bool.isRequired,
};
export default WomenDropdown;
