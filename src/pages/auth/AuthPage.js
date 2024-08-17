/** @format */

import React, { useContext } from 'react';
import AuthForm from '../../components/authForm/AuthForm';
import styles from './AuthPage.module.css';
import Footer from '../../components/footer/Footer';
import useWindowDimensions from '../planning/hooks/widthHook';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const AuthPage = () => {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx(styles[theme.colors.background])}>
      <div className={styles.container}>
        <AuthForm />
        {width > 579 && <Footer />}
      </div>
    </div>
  );
};

export default AuthPage;
