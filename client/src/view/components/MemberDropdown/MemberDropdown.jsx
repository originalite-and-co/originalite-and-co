import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './generateStyles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HistoryIcon from '@material-ui/icons/History';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function MemberDropdown({ toggledMemberDropdown }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const classesCx = cx(classes.dropdownItem, {
    [classes.dropdownItemClosed]: !toggledMemberDropdown
  });

  return (
    <>
      <Box component="div" className={classesCx}>
        <Link to="/member/profile">
          <AccountCircleIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
          />
        </Link>
      </Box>
      <Box component="div" className={classesCx}>
        <Link to="/member/wishlist">
          <FavoriteBorderIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
          />
        </Link>
      </Box>
      <Box component="div" className={classesCx}>
        <Link to="/member/purchaseHistory">
          <HistoryIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
          />
        </Link>
      </Box>
    </>
  );
}

export default MemberDropdown;
