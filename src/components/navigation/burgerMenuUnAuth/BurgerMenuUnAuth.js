import React from 'react';
import ModalNavListUnAuth from '../modalNavListUnAuth/ModalNavListUnAuth';
import styles from '../burgerMenuAuth/BurgerMenuAuth.module.css';

const BurgerMenuUnAuth = ({ onClose }) => {
  return (
    <>
      <div className={styles.container}>
        <ModalNavListUnAuth onClose={onClose} />
      </div>
    </>
  );
};

export default BurgerMenuUnAuth;
