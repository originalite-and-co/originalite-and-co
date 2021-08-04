import React, { useState, useEffect } from 'react';

function AppRoutes() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token'));

  useEffect(() => {
    setAuthenticated(!!sessionStorage.getItem('token'));
  }, []);

  return (<div>App routes</div>);
}

export default AppRoutes;
