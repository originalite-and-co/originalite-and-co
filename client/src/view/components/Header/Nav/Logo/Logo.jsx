import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import logo from '../icons/Originalité.svg';

function Logo() {
  return (
    <Box>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </Box>
  );
}

export default Logo;
