import React from 'react';
import PropTypes from 'prop-types';
import {Box} from "@material-ui/core";
import Nav from "../../components/Header/Nav/Nav";
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent";

Authentication.propTypes = {

};

function Authentication(props) {
    return (
        <Box>
            <Nav/>
            <AuthenticationContent/>
        </Box>
    );
}

export default Authentication;