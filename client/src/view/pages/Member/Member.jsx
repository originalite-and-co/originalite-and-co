import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Styles from './Member.module.scss'
import {Box} from "@material-ui/core";
import MemberTabs from "./MemberTabs/MemberTabs";
import {ordersRequests} from "../../../api/server";
import useAsyncError from './../../hooks/useAsyncError'

Member.propTypes = {

};


function Member() {
    return (
        <div>
            <Header/>
            <Box className={Styles.container}>
                <MemberTabs/>
            </Box>
        </div>
    );
}

export default Member;