import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PlanningPoints.module.css';
import useWindowDimensions from '../../pages/planning/hooks/widthHook';
import { ThemeContext } from '../../App';
import cx from 'classnames';
import declOfNum from '../../utils/declOfNum';

const PlanningPoints = ({ tasks }) => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  let sum = 0;
  tasks.map(task => (sum = sum + task.reward));
  return (
    <div className={styles.pointsContainer}>
      <p className={cx(styles.points, styles[theme.colors.text])}>
        {width > 579 && t('Defined tasks')}
        <span className={styles.sumPoints}>{sum}</span>
        {`${declOfNum(sum, [t('point1'), t('point'), t('points')])}`}
      </p>
    </div>
  );
};

export default PlanningPoints;
