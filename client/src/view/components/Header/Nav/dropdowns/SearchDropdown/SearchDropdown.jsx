import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import DropdownStyles from './SearchDropdown.module.scss';
import Button from '../../../../Button/Button';

function SearchDropdown({ searchToggle, }) {
  return (
    <Box className={searchToggle ? DropdownStyles.active : DropdownStyles.closed}>
        <Box className={DropdownStyles.textfieldWrapper}>
          <TextField fullWidth label="Search for item" />
          <CloseIcon className={DropdownStyles.closeIcon} />
        </Box>
        <Button text="search" backgroundColor="#000000" color="#FFFFFF" />
    </Box>
  );
}

SearchDropdown.propTypes = {
  searchToggle: PropTypes.bool.isRequired,
};

export default SearchDropdown;
