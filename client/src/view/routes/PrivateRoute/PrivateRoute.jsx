import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// eslint-disable-next-line no-use-before-define
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

function PrivateRoute({
  component: Component, isAuthenticated, path, ...rest
}) {
  return (
    <Route
      path={path}
      {...rest}
      render={(renderProps) => (isAuthenticated
        ? <Component {...renderProps} />
        : <Redirect to="/auth/login" />)}
    />
  );
}

export default PrivateRoute;
