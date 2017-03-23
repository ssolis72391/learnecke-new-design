import React, { useEffect, useState } from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';

const RouteWithLayout = function (props) {
  const { layout: Layout, component: Component, showNav, ...rest } = props;
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [location]);

  return isAuthenticated ? (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout showNav={showNav}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  ) : (
    <Redirect to='/login' />
  );
};

export default RouteWithLayout;
