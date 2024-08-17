// /** @format */

import React, { useContext } from 'react';
import Navigation from '../navigation/Navigation';
import Logo from '../navigation/logo/Logo';
import HeaderContainer from '../header/headerContainer/HeaderContainer';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { ThemeContext } from '../../App';
import cx from 'classnames';
import styles from './Header.module.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cx(styles[theme.colors.background])}>
      <div className="container">
        <HeaderContainer>
          <Logo />
          <LanguageSwitcher />
          <Navigation />
        </HeaderContainer>
      </div>
    </div>
  );
};

export default Header;
