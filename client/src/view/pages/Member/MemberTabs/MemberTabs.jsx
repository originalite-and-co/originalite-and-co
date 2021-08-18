import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MyProfile from "../MyProfile/MyProfile";
import {customerRequests, ordersRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";
import Toast from "../../../components/Toast/Toast";
MemberTabs.propTypes = {};
import Styles from './../Member.module.scss'
import PurchaseHistory from "../PurchaseHistory/PurchaseHistory";

const useStyles = makeStyles({
    tab: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#373737',
        borderBottom: 'none !important'
    },
    '&:selected': {
    color: '#1890ff !important'
    }
});

function MemberTabs() {
    const [customer, setCustomer] = useState()
    const [isDataUpdated, setIsDataUpdated] = useState(false)
    /*is used in MyProfile component, should the data be successfully updated*/

    const [value, setValue] = useState(0)
    const [orders, setOrders] = useState()

    const classes = useStyles()
    const throwError = useAsyncError();
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    useEffect(useCallback( () => {
        customerRequests.retrieveCustomer()
            .then(
                data => setCustomer(data),
                error => throwError(error)
            );
    }, [customer,isDataUpdated]), [isDataUpdated]);

    useEffect(() => {
        ordersRequests.retrieveOrder()
            .then(
                data => setOrders(data),
                error => throwError(error)
            )
    },[])

    const handleDataUpdate = () => {
        setIsDataUpdated(true)
    }

    return (
        <>
            {isDataUpdated && <Toast message="Data has been successfully updated"/>}
            <Tabs value={value} onChange={handleChange} centered={true}>
                <Tab className={classes.tab} label="My Profile"/>
                <Tab className={classes.tab} label="My Wishlist"/>
                <Tab className={classes.tab} label="Purchase history"/>
            </Tabs>
            <Box className={Styles.wrapper}>
                {value === 0 && typeof customer == 'object' && <MyProfile
                    customer={customer}
                    handleDataUpdate={handleDataUpdate}
                />}
                {value === 1 && <p>My Wishlist</p>}
                {value === 2 && typeof orders == 'object' && <PurchaseHistory
                    orders={orders}
                />}
            </Box>
        </>
    );
}

export default MemberTabs;