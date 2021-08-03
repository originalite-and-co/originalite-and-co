import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function AppRoutes(props) {
  const [isAuthenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token'));

  useEffect(() => {
    setAuthenticated(!!sessionStorage.getItem('token'));
  }, []);

  return (
    <Switch />
  );
}

export default AppRoutes;
