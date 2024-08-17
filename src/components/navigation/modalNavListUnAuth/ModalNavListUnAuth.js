import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ModalNavListUnAuth.module.css';

const ModalNavListUnAuth = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/auth"
        exact
        onClick={onClose}
      >
        Авторизация
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={styles.nav__link_item_active}
        to="/contacts-us"
        exact
        onClick={onClose}
      >
        Контакты
      </NavLink>
    </div>
  );
};

export default ModalNavListUnAuth;
