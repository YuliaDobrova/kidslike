import React from 'react';
import s from './TaskToggle.module.css';
import { ReactComponent as CheckIcon } from '../cardsIcons/taskTogle_check.svg';
import { ReactComponent as AttentionIcon } from '../cardsIcons/taskTogle_attention.svg';

const TaskToggle = ({ id, taskCompleted, isCompleted }) => {
  const onChange = e => {
    const id = e.target.id;
    taskCompleted(id);
  };
  console.log(isCompleted);

  return (
    <label htmlFor={id} className={s.switcher}>
      <input
        id={id}
        className={s.checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={onChange}
      />
      <span className={`${s.slider}`}>
        <CheckIcon className={s.checkIcon} width="11" height="11" />
        <AttentionIcon className={s.attentionIcon} width="11" height="11" />
      </span>
    </label>
  );
};
export default TaskToggle;
