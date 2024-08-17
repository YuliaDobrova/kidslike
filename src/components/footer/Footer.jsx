import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import footerIcon from './footerIcon.svg';
import ThemeSwitcher from '../../themeSwitcher/themeColors/themeSwitcher';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerTitleContainer}>
          <h2 className={cx(styles.footerTitle, styles[theme.colors.text])}>
            KidsLike
          </h2>
          <svg className={styles.footerIcon} width="12" height="12">
            <use href={footerIcon + '#icon-footerIconsvg'}></use>
          </svg>
        </div>
        <p className={cx(styles.footerSlogan, styles[theme.colors.text])}>
          {t('Making the life of parents and their children easy')}
        </p>
        <p className={cx(styles.footerDate, styles[theme.colors.text])}>2021</p>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Footer;
