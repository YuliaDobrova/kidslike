import React, { useEffect, useState } from 'react';
import CurrentWeekRange from '../../currentWeekRange/CurrentWeekRange';
import CurrentDays from '../../currentInfo/currentDays/CurrentDays';
import styles from './weekTabsContents.module.css';
import CurrentWeek from '../../currentInfo/currentWeek/CurrentWeek';
import NoCurrentWeekRange from '../../noCurrentWeekRange/NoCurrentWeekRange';
import Footer from '../../footer/Footer';
import ProgressBar from '../../progressBar/ProgressBar';

const initialState = {
  width: window.innerWidth,
  breakPoint: 580,
  startBreakPoint: 321,
  endBreakPoint: 1180,
};

const WeekTabsContents = ({ tasks }) => {
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
    <div className={styles.week}>
      <div className={styles.weekProgressBar}>
        {measure.width < measure.breakPoint && (
          <div className={styles.weekInfo}>
            <CurrentWeek />
            <CurrentDays />
          </div>
        )}
        {measure.width > measure.endBreakPoint && (
          <div className={styles.weekInfo}>
            <CurrentWeek />
            <CurrentDays />
          </div>
        )}
        {measure.width > measure.startBreakPoint && <ProgressBar />}
        {measure.width < measure.endBreakPoint &&
          measure.width > measure.breakPoint && <CurrentDays />}
      </div>
      {tasks.length > 0 ? (
        <CurrentWeekRange tasks={tasks} />
      ) : (
        <NoCurrentWeekRange />
      )}
      <Footer />
    </div>
  );
};

export default WeekTabsContents;
