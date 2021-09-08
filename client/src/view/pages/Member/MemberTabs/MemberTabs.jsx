import React, { useCallback, useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyProfile from '../MyProfile/MyProfile';
import {
  customerRequests,
  ordersRequests,
  wishlistRequests
} from '../../../../api/server/index';
import useAsyncError from '../../../hooks/useAsyncError';
import Toast from '../../../components/Toast/Toast';
import Styles from './../Member.module.scss';
import MyWishlist from '../MyWishlist/MyWishlist';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  wishlistOperations,
  wishlistSelectors
} from '../../../../redux/features/wishlist';
import PurchaseHistoryNew from '../PurchaseHistory/PurchaseHistoryNEW';

MemberTabs.propTypes = {};

const useStyles = makeStyles({
  tab: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#373737',
    borderBottom: 'none !important',
    marginTop: '20px'
  },
  '&:selected': {
    color: '#1890ff !important'
  }
});

function MemberTabs() {
  const [customer, setCustomer] = useState();
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  /*is used in MyProfile component, should the data be successfully updated*/

  const [orders, setOrders] = useState();
  const { params, url } = useRouteMatch();
  const [wishlist, setWishlist] = useState();

  const classes = useStyles();
  const throwError = useAsyncError();
  const dispatch = useDispatch();
  const wishlistState = useSelector(wishlistSelectors.getWishlist);

  const { replace } = useHistory();

  const [value, setValue] = useState('profile');

  const handleChange = (event, newValue) => {
    const pageUrl = url.replace(params.section, newValue);
    replace(pageUrl);
    setValue(newValue);
  };

  useEffect(
    useCallback(() => {
      customerRequests.retrieveCustomer().then(
        (data) => setCustomer(data),
        (error) => throwError(error)
      );
    }, [customer, isDataUpdated]),
    [isDataUpdated]
  );

  useEffect(() => {
    ordersRequests.retrieveOrder().then(
      (data) => setOrders(data),
      (error) => throwError(error)
    );
  }, []);

  useEffect(() => {
    wishlistRequests.retrieveWishlist().then(
      (data) => setWishlist(data),
      (error) => throwError(error)
    );
  }, [wishlistState]);

  useEffect(() => {
    if (!params.section) {
      return;
    }
    setValue(params.section);
  }, [params?.section]);

  const handleDataUpdate = () => {
    setIsDataUpdated(true);
  };

  return (
    <>
      {isDataUpdated && (
        <Toast
          severity="success"
          variant="filled"
          message="Data has been successfully updated"
        />
      )}
      <Tabs value={value} onChange={handleChange} centered={true}>
        <Tab className={classes.tab} value="profile" label="My Profile" />
        <Tab className={classes.tab} value="wishlist" label="My Wishlist" />
        <Tab
          className={classes.tab}
          value="purchaseHistory"
          label="Purchase history"
        />
      </Tabs>
      <Box className={`${Styles.wrapper} inner`}>
        {value === 'profile' && typeof customer == 'object' && (
          <MyProfile customer={customer} handleDataUpdate={handleDataUpdate} />
        )}
        {value === 'wishlist' && typeof wishlist == 'object' && (
          <MyWishlist wishlist={wishlist} />
        )}
        {value === 'purchaseHistory' && typeof orders == 'object' && (
          <PurchaseHistoryNew orders={orders} />
        )}
      </Box>
    </>
  );
}

export default MemberTabs;
