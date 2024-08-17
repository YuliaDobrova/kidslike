/** @format */

import React, { useCallback, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalBurger from '../modalBurger/ModalBurger';
import ModalCloseBurger from '../modalBurger/modalCloseBurger/ModalCloseBurger';
import BurgerMenu from '../burgerMenuIcon/BurgerMenuIcon';
import styles from './UnAuthorizedBar.module.css';
import BurgerMenuUnAuth from '../burgerMenuUnAuth/BurgerMenuUnAuth';
import useWindowDimensions from '../../../pages/planning/hooks/widthHook';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const UnAuthorizatedBar = () => {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);
  return (
    <>
      {width < 580 ? (
        <button className={styles.burger__modal_btn} onClick={toggleModal}>
          <BurgerMenu />
        </button>
      ) : (
        <nav className={styles.nav}>
          <NavLink
            className={cx(styles.nav__link_item, styles[theme.colors.text])}
            activeClassName={cx(
              styles.nav__link_item_active,
              styles[theme.colors.link],
            )}
            to="/auth"
            exact
          >
            {t('Authorization')}
          </NavLink>
          <NavLink
            className={cx(styles.nav__link_item, styles[theme.colors.text])}
            activeClassName={cx(
              styles.nav__link_item_active,
              styles[theme.colors.link],
            )}
            to="/contacts-us"
            exact
          >
            {t('Contacts')}
          </NavLink>
        </nav>
      )}
      {showModal && (
        <ModalBurger onClose={toggleModal}>
          <BurgerMenuUnAuth onClose={toggleModal} />
          <ModalCloseBurger onClose={toggleModal} />
        </ModalBurger>
      )}
    </>
  );
};

export default UnAuthorizatedBar;
