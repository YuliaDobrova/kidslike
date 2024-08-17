import React, { useContext } from 'react';
import ModalNavListAuth from '../modalNavListAuth/ModalNavListAuth';
import UserInfoModal from '../userInfoModal/UserInfoModal';
import styles from './BurgerMenuAuth.module.css';
import useWindowDimensions from '../../../pages/planning/hooks/widthHook';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const BurgerMenuAuth = ({ onLogout, onClose }) => {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={cx(styles.container, styles[theme.colors.background])}>
        {width < 580 && <UserInfoModal onLogout={onLogout} />}
        <ModalNavListAuth onClose={onClose} />
      </div>
    </>
  );
};

export default BurgerMenuAuth;
