import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { weekInfo } from '../../../redux/weekTabs/weekSelectors';
import styles from './CurrentWeek.module.css';
import cx from 'classnames';
import { ThemeContext } from '../../../App';

const CurrentWeek = () => {
  const { dates, month } = useSelector(weekInfo);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.tabsInfo}>
      <p className={cx(styles.tabsWeekInfo, styles[theme.colors.text])}>
        {dates && month ? (
          <>
            {t('Week')} {dates} {t(month)}
          </>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default CurrentWeek;
