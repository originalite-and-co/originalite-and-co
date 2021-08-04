import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function AppRoutes() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token'));

  useEffect(() => {
    setAuthenticated(!!sessionStorage.getItem('token'));
  }, []);

  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
}

export default AppRoutes;
