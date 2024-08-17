import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../redux/auth/authOperations';
import s from './Logout.module.css';

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    // console.log(`hello`);
    dispatch(logOut());
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={s.logoutContainer}>
        <p className={s.logoutText}>{t('Are you sure you want logout')}</p>
        <button className={s.logoutBtn} onClick={onLogout}>
          {t('Yes')}
        </button>
        <button className={s.logoutBtn} onClick={onClose}>
          {t('No')}
        </button>
      </div>
    </>
  );
};

export default Logout;
