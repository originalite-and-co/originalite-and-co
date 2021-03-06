import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import logo from '../../../../assets/icons/Originalité.svg';
// eslint-disable-next-line import/no-unresolved
import logoDesktop from '../../../../assets/icons/OriginalitéDesktop.svg';
import useWindowSize from '../../../../hooks/useWindowSize';
import constants from '../../../../constants';

function Logo() {
  const [isDesktop, setIsDesktop] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  return (
    <Box data-testid="logo">
      <Link to="/">
        <img src={!isDesktop ? logo : logoDesktop} alt="Logo" />
      </Link>
    </Box>
  );
}

export default Logo;
