import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Burger from '../BurgenMenu/Burger';
import { useSelector } from 'react-redux';
import { isAnyDropdownOpenSelectors } from '../../../../../redux/features/dropdown';
import Search from '../Search/Search';
import useWindowSize from '../../../../hooks/useWindowSize';
import constants from '../../../../constants';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './NavItemsStyles';
import Bag from '../../../../assets/icons/Bag';
import Person from '../../../../assets/icons/Person';
import { Typography } from '@material-ui/core';
import { cartSelectors } from '../../../../../redux/features/cart';

function NavItems() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const [isDropdownActive, setActiveDropdown] = useState(false);
  const isAnyDropdownOpen = useSelector(
    isAnyDropdownOpenSelectors.getIsAnyDropdownOpen
  );
  const cartQuantity = useSelector(cartSelectors.getCartQuantity);

  const [isDesktop, setIsDesktop] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    if (!isAnyDropdownOpen) {
      setActiveDropdown(false);
    }
  }, [isAnyDropdownOpen, isDropdownActive]);

  return (
    <Box className={classes.navItemsGroup} data-testid="navItems">
      <Search />
      <Box className={classes.navItem}>
        <Link to="/member/profile">
          <Box component="div" className={classes.imageWrapper}>
            <Person color="primary" className={classes.icon} />
            {isDesktop && (
              <Typography
                className={classes.iconTitle}
                component="p"
                variant="body1"
                color="textPrimary"
                noWrap
              >
                My account
              </Typography>
            )}
          </Box>
        </Link>
      </Box>
      <Box className={classes.navItem}>
        <Link
          className={classes.link}
          to="/cart"
          title={`Cart items: ${cartQuantity}`}
        >
          <Box component="div" className={classes.imageWrapper}>
            <Box className={`${classes.cartIconWrapper} ${classes.icon}`}>
              <Typography
                color="textPrimary"
                className={classes.cartQuantity}
                display="block"
                component="span"
                noWrap
              >
                {Number(cartQuantity) > 9 ? '9+' : cartQuantity}
              </Typography>
              <Bag color="primary" className={classes.bagIcon} />
            </Box>
            {isDesktop && (
              <Typography
                className={classes.iconTitle}
                component="p"
                variant="body1"
                color="textPrimary"
                noWrap
              >
                Shopping bag
              </Typography>
            )}
          </Box>
        </Link>
      </Box>
      {!isDesktop && (
        <Box>
          <Box data-testid="burger">
            <Burger />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default NavItems;
