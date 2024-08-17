import axios from 'axios';
import { getWeekError, getWeekRequest, getWeekSuccess } from './weekActions';

axios.defaults.baseURL = 'https://kidslikev1.herokuapp.com';

export const getWeekOperation = () => async dispatch => {
  dispatch(getWeekRequest());
  try {
    const { data } = await axios.get('/user/info');
    dispatch(getWeekSuccess(data));
  } catch (error) {
    dispatch(getWeekError(error.message));
  }
};
