import React from 'react';
import styles from './UserInfoModal.module.css';
import sprite from '../../../images/header/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../../redux/auth/authSelectors';

const UserInfo = ({ onLogout }) => {
  const userEmail = useSelector(getUserEmail);
  return (
    <>
      <div className={styles.user__name_container}>
        <span className={styles.upp__letter}>
          <p className={styles.letter}>{userEmail.toUpperCase().slice(0, 1)}</p>
        </span>
        <p className={styles.user__name}>{userEmail}</p>
        <button onClick={onLogout} className={styles.user__logout_btn}>
          <svg className={styles.svg}>
            <use href={sprite + '#icon-logout1'} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default UserInfo;
