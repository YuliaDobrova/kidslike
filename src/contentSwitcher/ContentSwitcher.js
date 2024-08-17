/** @format */

import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../routes/PrivatRoutes';
import PublicRoute from '../routes/PublicRoutes';

const ContentSwitcher = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route =>
        route.isPrivate ? (
          <PrivateRoute
            {...route}
            key={route.path}
            // isLoggedIn={route.isLoggedIn}
          />
        ) : (
          <PublicRoute
            {...route}
            key={route.path}
            // isLoggedIn={route.isLoggedIn}
          />
        ),
      )}
    </Switch>
  );
};

export default ContentSwitcher;
