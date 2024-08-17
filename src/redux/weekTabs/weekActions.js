import { createAction } from '@reduxjs/toolkit';

export const getWeekRequest = createAction('getWeekRequest');
export const getWeekSuccess = createAction('getWeekSuccess');
export const getWeekError = createAction('getWeekError');

export const filterTabs = createAction('filterTabs');
export const currentDay = createAction('currentDay');
