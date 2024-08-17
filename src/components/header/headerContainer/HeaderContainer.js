import React, { useContext } from 'react';
import styles from './HeaderContainer.module.css';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cx(styles.container, styles[theme.colors.boxShadow])}>
      {children}
    </div>
  );
};

export default Container;
