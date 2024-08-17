import React, { useCallback } from 'react';
import iconPlus from '../planningCards/image/symbol-defs.svg';
import styles from './AddCustomTask.module.css';
import { showTaskModal } from '../../redux/taskModal/taskModalAction';
import { useDispatch } from 'react-redux';

const AddCustomTask = () => {
  const dispatch = useDispatch();

  const openAddTaskModal = useCallback(() => {
    dispatch(showTaskModal());
  }, [dispatch]);

  return (
    <button
      type="button"
      className={styles.addButton}
      onClick={openAddTaskModal}
    >
      <svg className={styles.addIcon} width="18" height="18">
        <use href={iconPlus + '#icon-plus'}></use>
      </svg>
    </button>
  );
};

export default AddCustomTask;
