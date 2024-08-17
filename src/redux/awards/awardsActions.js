import { createAction } from '@reduxjs/toolkit';

export const fetchAwardsRequest = createAction('awards/fetchAwardsRequest');
export const fetchAwardsSuccess = createAction('awards/fetchAwardsSuccess');
export const fetchAwardsError = createAction('awards/fetchAwardsError');

export const orderAwardRequest = createAction('awards/orderAwardRequest');
export const orderAwardSuccess = createAction('awards/orderAwardSuccess');
export const orderAwardError = createAction('awards/orderAwardError');

export const resetAwards = createAction('awards/resetAwards');
export const resetGiftsId = createAction('awards/resetGiftsId');

export const updateBalance = createAction('awards/updateBalance');

export const resetError = createAction('awards/resetError');
