import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchTaskSwitch } from '../../../redux/tasks/tasksOperation';
import { getFilterSelector } from '../../../redux/weekTabs/weekSelectors';
import CardTitle from '../cardTitle';
import PointAmount from '../pointAmount';
import TaskToggle from '../taskTogle/TaskToggle';
import s from './CardFooter.module.css';

const CardFooter = data => {
  const { title, reward, days } = data;
  const dispatch = useDispatch();
  const filterDate = useSelector(getFilterSelector);
  const findDay = days.find(day => day.date === filterDate);

  const taskCompleted = id => {
    dispatch(patchTaskSwitch(id, { date: filterDate }));
    console.log(filterDate);
    console.log(findDay.isCompleted);
  };

  return (
    <div className={s.cardFooter}>
      <div>
        <CardTitle title={title} />
        <PointAmount reward={reward} />
      </div>
      <TaskToggle
        id={data._id}
        taskCompleted={taskCompleted}
        isCompleted={findDay.isCompleted}
      />
    </div>
  );
};

export default CardFooter;
