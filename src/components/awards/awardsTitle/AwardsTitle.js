import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import sprite from '../awardsImages/sprite.svg';
import styles from './AwardsTitle.module.css';
import { ThemeContext } from '../../../App';
import cx from 'classnames';

const AwardsTitle = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={styles.AwardsTitle__Wrapper}>
      <svg className={styles.AwardsTitle__icon}>
        <use href={sprite + '#icon-gift-box'} width="30"></use>
      </svg>
      <h2 className={cx(styles.AwardsTitle, styles[theme.colors.text])}>
        {t('My gifts')}
      </h2>
    </div>
  );
};

export default AwardsTitle;
