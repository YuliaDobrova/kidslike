import React from 'react';
import styles from './TaskInput.module.css';
import modalTaskIcon from '../modalTaskIcon.svg';
import cx from 'classnames';

const TaskInput = ({
  name,
  onChange,
  value,
  type,
  placeholder,
  hasError = false,
}) => {
  return (
    <label className={styles.inputLabel}>
      <input
        className={cx(styles.taskInput, { [styles.hasError]: hasError })}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      <svg className={styles.modalTaskIcon} width="24" height="24">
        <use href={modalTaskIcon + '#task-input-icon'}></use>
      </svg>
    </label>
  );
};

export default TaskInput;
