import React, { useContext } from 'react';
import closeIcon from '../image/closeIcon.svg';
import styles from './ModalClose.module.css';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const ModalClose = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button type="button" className={styles.closeButton} onClick={onClose}>
      <svg
        className={cx(styles.closeIcon, styles[theme.colors.iconFill])}
        width="18"
        height="18"
      >
        <use href={closeIcon + '#icon-close'}></use>
      </svg>
    </button>
  );
};

export default ModalClose;
