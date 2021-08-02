import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/Originalité.svg';

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
}

export default Logo;
