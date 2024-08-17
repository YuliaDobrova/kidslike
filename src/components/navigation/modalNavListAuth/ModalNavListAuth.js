/** @format */

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './ModalNavListAuth.module.css';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const ModalNavListAuth = ({ onClose }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/"
        exact
        onClick={onClose}
      >
        {t('Home')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/planing"
        exact
        onClick={onClose}
      >
        {t('Planning')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/awards"
        exact
        onClick={onClose}
      >
        {t('Awards')}
      </NavLink>
      <NavLink
        className={styles.nav__link_item}
        activeClassName={cx(
          styles.nav__link_item_active,
          styles[theme.colors.link],
        )}
        to="/contacts-us"
        exact
        onClick={onClose}
      >
        {t('Contacts')}
      </NavLink>
    </div>
  );
};

export default ModalNavListAuth;
