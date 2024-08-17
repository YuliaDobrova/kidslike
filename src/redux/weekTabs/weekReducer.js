import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  currentDay,
  filterTabs,
  getWeekError,
  getWeekSuccess,
} from './weekActions';

const currentDate = () => {
  const date = new Date();
  const padStart = num => String(num).padStart(2, '0');
  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1);
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function getWeekDay() {
  const date = new Date();
  return weekDays[date.getDay()];
}

const infoWeekReduser = createReducer([], {
  [getWeekSuccess]: (_, { payload }) => payload.week,

});

const errorWeekReduser = createReducer(null, {
  [getWeekError]: (_, { payload }) => payload,
});

const filterWeekTabs = createReducer(currentDate(), {
  [filterTabs]: (_, { payload }) => payload,
});

const currentDayReduser = createReducer(getWeekDay(), {
  [currentDay]: (_, { payload }) => payload,
});

const weekReducer = combineReducers({
  info: infoWeekReduser,
  error: errorWeekReduser,
  filter: filterWeekTabs,
  day: currentDayReduser,
});

export default weekReducer;
