import React, { useContext } from 'react';
import ProgressIndicator from './progressIndicator/ProgressIndicator';
import { useTranslation } from 'react-i18next';
import styles from './ProgressBar.module.css';
import { useSelector } from 'react-redux';
import { getCardsTotalPoints } from '../../redux/weekTabs/weekSelectors';
import { getUserBalance } from '../../redux/auth/authSelectors';
import cx from 'classnames';
import { ThemeContext } from '../../App';

const ProgressBar = () => {
  const rewardsPlanned = useSelector(getCardsTotalPoints);
  const rewardsGained = useSelector(getUserBalance);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const currentProgress =
    rewardsPlanned && rewardsGained
      ? Math.floor((rewardsGained / rewardsPlanned) * 100)
      : 0;
  const progress = Math.min(currentProgress, 100);

  return (
    <div className={styles.progressBarContainer}>
      <p className={cx(styles.currentPointsTitle, styles[theme.colors.text])}>
        {t('Earned points')}
        <span className={styles.hideTitle}>&nbsp;{t('this week')}</span>:
        <span className={styles.points}>{rewardsGained}</span>
      </p>
      <p className={cx(styles.commonPointsTitle, styles[theme.colors.text])}>
        {t('Total points this week')}
        <span className={styles.points}>{rewardsPlanned}</span>
      </p>
      <div className={styles.progressContainer}>
        <div className={styles.commonPoints}>
          <span className={styles.currentPoints}>{rewardsGained}</span> /
          {rewardsPlanned}
        </div>
        <ProgressIndicator progress={progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
