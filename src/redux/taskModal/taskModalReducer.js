import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { showTaskModal, hideTaskModal } from './taskModalAction';

import { createTaskSuccess } from '../tasks/tasksAction';

const visible = createReducer(false, {
  [showTaskModal]: () => true,
  [hideTaskModal]: () => false,
  [createTaskSuccess]: () => false,
});

export default combineReducers({ visible });
