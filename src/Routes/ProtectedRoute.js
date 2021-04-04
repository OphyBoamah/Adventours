import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = Cookies.get('token');

  return (
    <Route
      {...rest}
      render={(props) => {
        return token.token ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
