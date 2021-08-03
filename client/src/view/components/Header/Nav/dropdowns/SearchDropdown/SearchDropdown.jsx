import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import DropdownStyles from './SearchDropdown.module.scss';
import Button from '../../../../Button/Button';

// eslint-disable-next-line react/prop-types
function SearchDropdown({ searchToggle, }) {
  return (
    <Box className={searchToggle ? DropdownStyles.active : DropdownStyles.closed}>
      <Box className={DropdownStyles.wrapper}>
        <Box className={DropdownStyles.textfieldWrapper}>
          <TextField fullWidth label="Search for item" />
          <CloseIcon className={DropdownStyles.closeIcon} />
        </Box>
        <Button text="search" backgroundColor="#000000" color="#FFFFFF" />
      </Box>
    </Box>
  );
}

export default SearchDropdown;
