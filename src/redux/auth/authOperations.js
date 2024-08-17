import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  // registerError,
  loginRequest,
  loginSuccess,
  // loginError,
  logoutRequest,
  logoutSuccess,
  // logoutError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './authActions';

axios.defaults.baseURL = 'https://kidslikev1.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = user => async dispatch => {
  console.log('register operation');
  dispatch(registerRequest());
  dispatch(registerSuccess(true));
  // try {
  //   const response = await axios.post('/auth/register', user);
  //   token.set(response.data.token);
  //   dispatch(registerSuccess(response.data));
  // } catch (error) {
  //   console.log(error.message);
  //   dispatch(registerError(error.message));
  // }
};

export const login = user => async dispatch => {
  dispatch(loginRequest());
  dispatch(loginSuccess(true));
  // try {
  //   const response = await axios.post('auth/login', user);
  //   token.set(response.data.token);
  //   dispatch(loginSuccess(response.data));
  // } catch (error) {
  //   console.log(error.message);
  //   dispatch(loginError(error.message));
  // }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  dispatch(logoutSuccess(true));
  window.location.href = '/auth';

  // try {
  //   await axios.post('auth/logout');
  //   token.unset();
  //   dispatch(logoutSuccess());
  // } catch (error) {
  //   console.log(error.message);
  //   dispatch(logoutError(error.message));
  // }
};

export const getUserInfo = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getUserInfoRequest());
  try {
    const response = await axios.get('/user/info');
    dispatch(getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
