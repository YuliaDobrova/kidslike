import { createAction } from '@reduxjs/toolkit';

export const createTaskRequest = createAction('task/createTaskRequest');
export const createTaskSuccess = createAction('task/createTaskSuccess');
export const createTaskError = createAction('task/createTaskError');

export const patchActiveTaskRequest = createAction(
  'task/patchActiveTaskRequest',
);
export const patchActiveTaskSuccess = createAction(
  'task/patchActiveTaskSuccess',
);
export const patchActiveTaskError = createAction('task/patchActiveTaskError');

export const addBalanceTaskRequest = createAction('addBalanceTaskTaskRequest');
export const addBalanceTaskSuccess = createAction('addBalanceTaskSuccess');
export const addBalanceTaskError = createAction('addBalanceTaskError');
