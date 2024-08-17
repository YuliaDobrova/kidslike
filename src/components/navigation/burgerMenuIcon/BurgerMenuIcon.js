/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './BurgerMenuIcon.module.css';
import sprite from '../../../images/header/symbol-defs.svg';

const BurgerMenuIcon = () => {
  return (
    <div>
      <svg className={styles.svg}>
        <use href={sprite + '#icon-menu'} />
      </svg>
    </div>
  );
};

export default BurgerMenuIcon;
