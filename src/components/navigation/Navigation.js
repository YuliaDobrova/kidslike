/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import AuthorizedBar from './authorizedBar/AuthorizedBar';
import UnAuthorizedBar from './unAuthorizedBar/UnAuthorizedBar';
import { getAuthenticated } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getAuthenticated);
  return <>{isLoggedIn ? <AuthorizedBar /> : <UnAuthorizedBar />}</>;
};

export default Navigation;
