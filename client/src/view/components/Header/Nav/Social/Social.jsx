import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Facebook from '../../../../assets/icons/facebook.svg';
import Instagram from '../../../../assets/icons/instagram.svg';
import Pinterest from '../../../../assets/icons/pinterest.svg';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './SocialStyles';

function Social() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  return (
    <Box className={classes.social} data-testid="social">
      <h3 className={classes.socialText}>follow us</h3>
      <Box className={classes.socialGroup}>
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
