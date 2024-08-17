import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthenticated, getToken } from '../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  redirectTo,
  children,
  key,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getAuthenticated);
  // const isLoggedIn = useSelector(getToken);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={redirectTo} key={key} />
      )}
    </Route>
  );
}
