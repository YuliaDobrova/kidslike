import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeekTabs from '../../components/week/weekTabs/WeekTabs';
import WeekTabsContents from '../../components/week/weekTabsContents/WeekTabsContents';
import { getWeekOperation } from '../../redux/weekTabs/weekOperation';
import {
  getVisibleTasks,
  getWeekDate,
} from '../../redux/weekTabs/weekSelectors';
import styles from './MainPage.module.css';
import ProgressBar from '../../components/progressBar/ProgressBar';
import { ThemeContext } from '../../App';

const initialState = {
  width: window.innerWidth,
  breakPoint: 580,
};

const MainPage = () => {
  const [measure, setMeasure] = useState(initialState);
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const numbers = useSelector(getWeekDate);
  const tasks = useSelector(getVisibleTasks);
  const hendleResizeWindow = () => {
    setMeasure(prev => ({ ...prev, width: window.innerWidth }));
  };

  useEffect(() => {
    dispatch(getWeekOperation());
    window.addEventListener('resize', hendleResizeWindow);
    return () => {
      window.removeEventListener('resize', hendleResizeWindow);
    };
  }, [dispatch]);

  return (
    <div className={styles[theme.colors.background]}>
      <div className={styles.container}>
        <div className={styles.main}>
          <WeekTabs numbers={numbers} />
          <WeekTabsContents tasks={tasks} />
          {measure.width < measure.breakPoint && <ProgressBar />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
