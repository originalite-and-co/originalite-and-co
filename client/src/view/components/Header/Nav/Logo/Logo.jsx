import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import logo from '../icons/Originalité.svg';
import logoDesktop from '../icons/OriginalitéDesktop.svg'
import useWindowSize from "../../../../hooks/useWindowSize";
import constants from "../../../../constants";

function Logo() {
    const [isDesktop, setIsDesktop] = useState()
    const sizes = useWindowSize();

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE
            ? setIsDesktop(true)
            : setIsDesktop(false)
    }, [sizes])

    return (
    <Box data-testid="logo">
      <Link to="/">
          <img src={!isDesktop ? logo : logoDesktop} alt="Logo"/>
      </Link>
    </Box>
  );
}

export default Logo;
