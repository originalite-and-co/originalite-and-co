import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WomenDropdownStyles from './WomenDropdown.module.scss';

function ListItemWomen({ text, }) {
  return (
    <Box className={WomenDropdownStyles.listItemBody}>
      <Link to="/">
        <li className={WomenDropdownStyles.listItemText}>{text}</li>
      </Link>
    </Box>
  );
}

ListItemWomen.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItemWomen;
