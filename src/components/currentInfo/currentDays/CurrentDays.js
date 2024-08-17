import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  currentDateInfo,
  getDaySelector,
} from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentDays.module.css';
import cx from 'classnames';
import { ThemeContext } from '../../../App';
import { useContext } from 'react';

const CurrentDays = () => {
  const date = useSelector(currentDateInfo);
  const day = useSelector(getDaySelector);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.tabsTasksInfo}>
      <p className={cx(styles.tabsTasksTitle, styles[theme.colors.text])}>
        {t('My tasks')}
      </p>
      <p className={styles.tabsTasksText}>
        {t(day)}, {date}
      </p>
    </div>
  );
};

export default CurrentDays;
