import { createSelector } from '@reduxjs/toolkit';

export const getWeekDate = state => {
  const dateArray = [];
  const startDate = state.weekInfo.info.startWeekDate;
  const endDate = state.weekInfo.info.endWeekDate;
  const dateMove = new Date(startDate);
  let strDate = startDate;

  while (strDate < endDate) {
    strDate = dateMove.toISOString().slice(0, 10);
    dateArray.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
  }

  return dateArray;
};

// const month = [
//   'Января',
//   'Февраля',
//   'Марта',
//   'Апреля',
//   'Майя',
//   'Июня',
//   'Июля',
//   'Августа',
//   'Сентября',
//   'Ноября',
//   'Декабря',
// ];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const weekInfo = state => {
  if (!state.weekInfo.info.startWeekDate || !state.weekInfo.info.endWeekDate) {
    return {};
  }
  const startNum = new Date(state.weekInfo.info.startWeekDate);
  const endNum = new Date(state.weekInfo.info.endWeekDate);
  const startDate = startNum.getDate();
  const endDate = endNum.getDate();
  const currentMonth = month[endNum.getMonth()];

  return { dates: `${startDate}-${endDate}`, month: currentMonth };
};

export const getCardsInfo = state => state.weekInfo?.info?.tasks || [];
export const getFilterSelector = state => state.weekInfo.filter;
export const getDaySelector = state => state.weekInfo.day;
export const getTasks = state => state.tasks.tasksRequests || [];

export const getVisibleTasks = createSelector(
  [getTasks, getFilterSelector],
  (tasks, filter) => {
    return tasks.filter(
      ({ days }) =>
        days.some(({ date, isActive }) => isActive && date === filter), // добавить isActive &&
    );
  },
);

export const currentDateInfo = state => {
  // const date = new Date(state.weekInfo.filter);
  const date = new Date();
  const day = date.getDate();
  const padStart = num => String(num).padStart(2, '0');
  const month = padStart(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const getWeekInfo = state => state.weekInfo?.info;

export const getCardsTotalPoints = createSelector(
  getWeekInfo,
  week => week?.rewardsPlanned || 0,
);

export const getCardsCompletedPoints = createSelector(
  getWeekInfo,
  week => week?.rewardsGained || 0,
);
