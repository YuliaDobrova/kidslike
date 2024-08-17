import React, { useCallback, useState } from 'react';
import styles from './UserMenu.module.css';
import BurgerIcon from '../burgerMenuIcon/BurgerMenuIcon';
import Modal from '../../modal/Modal';
import Logout from '../../logout/Logout';
import ModalClose from '../../modal/modalClose/ModalClose';
import ModalBurger from '../modalBurger/ModalBurger';
import BurgerMenuAuth from '../burgerMenuAuth/BurgerMenuAuth';
import ModalCloseBurger from '../modalBurger/modalCloseBurger/ModalCloseBurger';
import UserInfo from '../userInfo/UserInfo';
import { logOut } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import useWindowDimensions from '../../../pages/planning/hooks/widthHook';

const UserMenu = () => {
  const { width } = useWindowDimensions();
  const [showModalLogout, setShowModalLogout] = useState(false);
  const [showModalBurgerMenu, setShowModalBurgerMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleModalLogout = useCallback(() => {
    setShowModalLogout(prevShowModal => !prevShowModal);
  }, []);

  const toggleModalBurgerMenu = useCallback(() => {
    setShowModalBurgerMenu(prevShowModal => !prevShowModal);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <>
      {width < 1180 && (
        <button
          onClick={toggleModalBurgerMenu}
          className={styles.user__burger_menu_btn}
        >
          <BurgerIcon />
        </button>
      )}

      <UserInfo toggleModalLogout={toggleModalLogout} />

      {showModalLogout && (
        <Modal onClose={toggleModalLogout}>
          <Logout onClose={toggleModalLogout} />
          <ModalClose onClose={toggleModalLogout} />
        </Modal>
      )}

      {showModalBurgerMenu && (
        <ModalBurger onClose={toggleModalBurgerMenu}>
          <BurgerMenuAuth onLogout={onLogOut} onClose={toggleModalBurgerMenu} />
          <ModalCloseBurger onClose={toggleModalBurgerMenu} />
        </ModalBurger>
      )}
    </>
  );
};

export default UserMenu;
