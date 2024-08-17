import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {i18n.language === 'en' ? (
        <button
          className={cx(styles.languageButton, styles[theme.colors.background])}
          onClick={() => i18n.changeLanguage('ru')}
        >
          RU
        </button>
      ) : (
        <button
          className={cx(styles.languageButton, styles[theme.colors.background])}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
      )}
    </>
  );
};

export default LanguageSwitcher;
