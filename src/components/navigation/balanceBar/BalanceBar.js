import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../App';
import cx from 'classnames';
import {
  getAuthenticated,
  getUserBalance,
} from '../../../redux/auth/authSelectors';
import styles from './BalanceBar.module.css';

const BalanceBar = () => {
  const balance = useSelector(getUserBalance);
  const { t } = useTranslation();
  const isLoggedIn = useSelector(getAuthenticated);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <p className={cx(styles.text, styles[theme.colors.text])}>
            {t('Points')}
          </p>
        </li>
        <li>
          <p className={cx(styles.text, styles[theme.colors.text])}>
            {t('balance')}
          </p>
        </li>
      </ul>
      <span className={cx(styles.number, styles[theme.colors.text])}>
        {isLoggedIn ? balance : <p>0</p>}
      </span>
    </div>
  );
};

export default BalanceBar;
