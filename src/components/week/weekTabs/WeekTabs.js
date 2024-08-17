import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { currentDay, filterTabs } from '../../../redux/weekTabs/weekActions';
import { getFilterSelector } from '../../../redux/weekTabs/weekSelectors';
import CurrentWeek from '../../currentInfo/currentWeek/CurrentWeek';
import styles from './WeekTabs.module.css';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const shortWeekDays = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};
const initialState = {
  width: window.innerWidth,
  startBreakPoint: 1180,
  breakPoint: 580,
  endBreakPoint: 321,
};

const WeekTabs = ({ numbers }) => {
  const [measure, setMeasure] = useState(initialState);

  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);
  const hendleResizeWindow = () => {
    setMeasure(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.removeEventListener('resize', hendleResizeWindow);
    };
  }, []);

  const { t } = useTranslation();

  const getCurrentInfo = e => {
    const id = e.currentTarget.id;
    const name = e.currentTarget.dataset.day;
    dispatch(filterTabs(id));
    dispatch(currentDay(name));
  };

  return (
    <div className={styles.weekBox}>
      {measure.startBreakPoint > measure.width &&
        measure.width > measure.breakPoint && <CurrentWeek styles={styles} />}

      <ul className={styles.navWeekList}>
        {weekDays.map((day, idx) => (
          <li
            className={styles.navWeekItem}
            key={day}
            onClick={getCurrentInfo}
            id={numbers[idx]}
            data-day={day}
          >
            <button
              className={
                numbers[idx] === filter
                  ? styles.navWeekBtnActive
                  : styles.navWeekBtn
              }
            >
              <p className={styles.navWeekBtnText}>
                {t(
                  measure.width > measure.startBreakPoint
                    ? day
                    : shortWeekDays[day],
                )}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekTabs;
