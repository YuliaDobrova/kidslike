import axios from 'axios';
import { addBalanceTaskSuccess } from '../tasks/tasksAction';
import {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
  orderAwardRequest,
  orderAwardSuccess,
  orderAwardError,
} from './awardsActions';

export const fetchAwards = () => async dispatch => {
  dispatch(fetchAwardsRequest());
  try {
    const data = await axios.get(
      'https://kidslikev1.herokuapp.com/gift',
      //  {
      //   headers: {
      //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWEiLCJzaWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWIiLCJpYXQiOjE2MjkyOTU1ODV9.dri2dzlsnubjeNl6DKWKQR87cVihgWaVRrfxODq5QI0`,
      //   },
      // }
    );
    dispatch(fetchAwardsSuccess(data.data.ruGifts));
  } catch (error) {
    dispatch(fetchAwardsError(error.message));
  }
};

export const orderAward = giftIds => async (dispatch, getState) => {
  try {
    dispatch(orderAwardRequest());
    const res = await axios.patch(
      'https://kidslikev1.herokuapp.com/gift',
      giftIds,
      // {
      //   headers: {
      //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWEiLCJzaWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWIiLCJpYXQiOjE2MjkyOTU1ODV9.dri2dzlsnubjeNl6DKWKQR87cVihgWaVRrfxODq5QI0`,
      //   },
      // },
    );
    dispatch(orderAwardSuccess({ giftIds: res.data.purchasedGiftIds }));
    dispatch(
      addBalanceTaskSuccess({ updatedBalance: res.data.updatedBalance }),
    );
  } catch (error) {
    dispatch(orderAwardError(error.message));
  }
};
