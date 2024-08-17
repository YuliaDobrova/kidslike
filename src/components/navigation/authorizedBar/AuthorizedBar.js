import React from 'react';
import NavigationList from '../navigationList/NavigationList';
import UserMenu from '../userMenu/UserMenu';
import styles from './AuthorizedBar.module.css';
import useWindowDimensions from '../../../pages/planning/hooks/widthHook';

const AuthorizedBar = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={styles.container}>
      {width > 1180 && <NavigationList />}
      <UserMenu />
    </div>
  );
};

export default AuthorizedBar;
