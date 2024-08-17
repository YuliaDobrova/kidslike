import React from 'react';
// import closeIcon from './closeIcon.svg';
import styles from './ModalCloseBurger.module.css';
import sprite from '../../../../images/header/symbol-defs.svg';

const ModalCloseBurger = ({ onClose }) => {
  return (
    <button type="button" className={styles.closeButton} onClick={onClose}>
      <svg className={styles.svg}>
        <use href={sprite + '#icon-close'} />
      </svg>
    </button>
  );
};

export default ModalCloseBurger;
