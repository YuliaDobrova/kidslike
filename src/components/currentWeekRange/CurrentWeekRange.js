import React from 'react';
import Card from '../cards/card/Card';
import styles from './CurrentWeekRange.module.css';

const CurrentWeekRange = ({ tasks }) => {
  // console.log(tasks);
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <li key={task._id} className={styles.taskItem}>
          <Card data={task} />
        </li>
      ))}
    </ul>
  );
};

export default CurrentWeekRange;
