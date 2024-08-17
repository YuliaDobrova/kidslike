import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import img_des from './images/planer-des.png';
import img_tab from './images/planer-tab.png';
import img_mob from './images/planer-mob.png';

import styles from './NoCurrentWeekRange.module.css';
import { Link } from 'react-router-dom';

const initialState = {
  width: window.innerWidth,
  endBreakPoint: 1279,
  startBreakPoint: 768,
};

const NoCurrentWeekRange = () => {
  const { t } = useTranslation();

  const [measure, setMeasure] = useState(initialState);

  const hendleResizeWindow = () => {
    setMeasure(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.removeEventListener('resize', hendleResizeWindow);
    };
  }, []);

  return (
    <>
      <p className={styles.text}>{t('No tasks for that day')}</p>
      <Link to="/planing" className={styles.btn}>
        {t('Plan tasks')}
      </Link>
      {(measure.startBreakPoint > measure.width && (
        <img src={img_mob} alt="childrens" width="320" />
      )) ||
        (measure.width > measure.endBreakPoint && (
          <img src={img_des} alt="childrens" width="1040" />
        )) ||
        (measure.startBreakPoint < measure.width < measure.endBreakPoint && (
          <img src={img_tab} alt="childrens" width="768" />
        ))}
    </>
  );
};

export default NoCurrentWeekRange;
