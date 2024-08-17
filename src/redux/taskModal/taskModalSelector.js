import { createSelector } from '@reduxjs/toolkit';

export const getTaskModal = state => state.taskModal;
export const getTaskModalVisible = createSelector(
  getTaskModal,
  taskModal => taskModal.visible,
);
