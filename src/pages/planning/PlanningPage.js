import React, { useCallback, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './Planning.module.css';
import { getTasks } from '../../redux/tasks/tasksSelector';
import { addTask } from '../../redux/tasks/tasksOperation';
import PlanningPoints from '../../components/planningPoints/PlanningPoints';
import PlanningCards from '../../components/planningCards/planningCards/PlanningCards';
import { useSelector } from 'react-redux';
import NewTaskModal from '../../components/taskModal/newTaskModal/NewTaskModal';
import AddCustomTask from '../../components/addCustomTask/AddCustomTask';
import useWindowDimensions from './hooks/widthHook';
import Footer from '../../components/footer/Footer';
import { weekInfo } from '../../redux/weekTabs/weekSelectors';
import { getWeekOperation } from '../../redux/weekTabs/weekOperation';
import { ThemeContext } from '../../App';
import cx from 'classnames';

const PlanningPage = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const { dates, month } = useSelector(weekInfo);
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getWeekOperation());
  }, [dispatch]);

  // create task for form
  const onAddTask = useCallback(
    ({ title, reward, file }) => {
      dispatch(addTask(title, reward, file));
    },
    [dispatch],
  );
  const { t } = useTranslation();

  return (
    <div className={styles[theme.colors.background]}>
      <div className="container">
        <div className={styles.planningPageContainer}>
          <div className={styles.planningHeaderContainer}>
            <div className={styles.planForWeekContainer}>
              <p
                className={cx(styles.planningTitle, styles[theme.colors.text])}
              >
                {t('Plan for the week')}
              </p>
              {dates && month ? (
                <h2
                  className={cx(styles.planningWeek, styles[theme.colors.text])}
                >
                  {dates} {t(month)}
                </h2>
              ) : null}
            </div>
            {width > 579 && <PlanningPoints tasks={tasks} />}
            <div className={styles.addTaskContainer}>
              {width > 579 && (
                <p
                  className={cx(
                    styles.motivationalText,
                    styles[theme.colors.text],
                  )}
                >
                  {t('Want to get gifts add tasks')}
                </p>
              )}
              {width > 579 && (
                <>
                  <NewTaskModal onAddTask={onAddTask} />
                  <AddCustomTask />
                </>
              )}
            </div>
          </div>
        </div>
        <PlanningCards tasks={tasks} />
        <Footer />
      </div>

      {width < 580 && (
        <div
          className={cx(
            styles.pointsMobileContainer,
            styles[theme.colors.cardBg],
          )}
        >
          <div className="container">
            <PlanningPoints tasks={tasks} />
            <NewTaskModal onAddTask={onAddTask} />
            <AddCustomTask />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanningPage;
