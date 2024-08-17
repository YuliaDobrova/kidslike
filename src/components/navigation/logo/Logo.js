/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
// import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
// import { authSelectors } from "../../../redux/auth";
import styles from './Logo.module.css';
import sprite from '../../../images/header/symbol-defs.svg';
import BalanceBar from '../balanceBar/BalanceBar';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

export default function Logo() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <NavLink
        className={cx(styles.logo, styles[theme.colors.text])}
        to="/"
        exact
      >
        KidsLike
        <span>
          <svg className={styles.icon__svg}>
            <use href={sprite + '#icon-victory1'} />
          </svg>
        </span>
      </NavLink>
      {location.pathname === '/' && <BalanceBar />}
      {location.pathname === '/awards' && <BalanceBar />}
      {location.pathname === '/planing' && <BalanceBar />}
    </div>
  );
}
