import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MyProfile from "../MyProfile/MyProfile";
import { customerRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";
import Toast from "../../../components/Toast/Toast";
MemberTabs.propTypes = {};
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

function MemberTabs(props) {
    const [customer, setCustomer] = useState()
    const [isDataUpdated, setIsDataUpdated] = useState(false)
    /*is used in MyProfile component, should the data be successfully updated*/

    const [value, setValue] = useState(0)
    const classes = useStyles()

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

    const handleDataUpdate = () => {
        setIsDataUpdated(true)
    }

    console.log(isDataUpdated)
    return (
        <>
            {isDataUpdated && <Toast message="Data has been successfully updated"/>}
            <Tabs value={value} onChange={handleChange} centered={true}>
                <Tab className={classes.tab} label="My Profile"/>
                <Tab className={classes.tab} label="My Wishlist"/>
                <Tab className={classes.tab} label="Purchase history"/>
            </Tabs>
            {value === 0 && typeof customer == 'object' && <MyProfile
                customer={customer}
                handleDataUpdate={handleDataUpdate}
            />}
            {value === 1 && <p>My Wishlist</p>}
            {value === 2 && <p>Purchase history</p>}
        </>
    );
}

export default MemberTabs;