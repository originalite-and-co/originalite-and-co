import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BurgerDropdownStyles from './BurgerDropdown.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function ListItem({ text, }) {
  return (
    <Box className={BurgerDropdownStyles.listItem}>
      <Link to="/">
        <Box className={BurgerDropdownStyles.listItemBody}>
          <ExpandMoreIcon fontSize="small" />
          <li className={BurgerDropdownStyles.listItemText}>{text}</li>
        </Box>
      </Link>
    </Box>
  );
}

export function ListItemUpper({ text, }) {
  return (
    <Box className={BurgerDropdownStyles.listItem}>
      <Box>
        <Link to="/">
          <Box className={BurgerDropdownStyles.listItemBody}>
            <ExpandMoreIcon fontSize="small" />
            <li className={BurgerDropdownStyles.listItemTextUpper}>{text}</li>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};
ListItemUpper.propTypes = {
  text: PropTypes.string.isRequired,
};
