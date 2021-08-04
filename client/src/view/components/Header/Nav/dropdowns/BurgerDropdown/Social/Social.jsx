import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';
import Pinterest from '../../../icons/pinterest.svg';
import SocialStyles from './Social.module.scss';

function Social() {
  return (
    <Box className={SocialStyles.social}>
      <h3 className={SocialStyles.socialText}>follow us</h3>
      <Box className={SocialStyles.socialGroup}>
        <Box>
          <Link to="/">
            <img src={Facebook} alt="Facebook" />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <img src={Instagram} alt="Instagram" />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <img src={Pinterest} alt="Pinterest" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Social;
