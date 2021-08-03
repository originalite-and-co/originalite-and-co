import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

PrivateRoute.propTypes = {
    component: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function PrivateRoute ({component: Component, isAuthenticated, ...rest}) {
    return (
        <Route {...rest} render={(renderProps) =>{
            return isAuthenticated
                ? <Component {...renderProps} />
                : <Redirect to="/login" />
        } }/>
    );
}

export default PrivateRoute;