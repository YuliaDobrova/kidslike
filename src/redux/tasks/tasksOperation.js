import axios from 'axios';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  patchActiveTaskRequest,
  patchActiveTaskSuccess,
  patchActiveTaskError,
  addBalanceTaskRequest,
  addBalanceTaskSuccess,
  addBalanceTaskError,
} from './tasksAction';

// const baseToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGQiLCJzaWQiOiI2MTFkMGVmNzU2MjBjZDAwMTdlOGU0NGUiLCJpYXQiOjE2MjkyOTQzMjd9.pOQBlPgoQLUz3RA-ywzNM1I-etuOhfGb8XHa-eajoHs';

// export const addTask = (title, reward) => dispatch => {
//   dispatch(createTaskRequest());
//   const task = {
//     title,
//     reward,
//   };
//   axios
//     .post(`/task`, task)
//     .then(({ data }) => dispatch(createTaskSuccess(data)))
//     .catch(error => dispatch(createTaskError(error.message)));
// };

export const addTask = (title, reward, file) => dispatch => {
  dispatch(createTaskRequest());
  const formData = new FormData();
  if (file) {
    formData.set('title', title);
    formData.set('reward', Number(reward));
    formData.append('file', file);
  } else {
    formData.set('title', title);
    formData.set('reward', Number(reward));
  }

  axios
    .post(`/task`, formData)
    .then(({ data }) => dispatch(createTaskSuccess(data)))
    .catch(error => dispatch(createTaskError(error.message)));
};

export const patchActiveTask = (taskId, bodyData) => async dispatch => {
  dispatch(patchActiveTaskRequest());
  try {
    const response = await axios.patch(
      `/task/single-active/${taskId}`,
      bodyData,
    );
    dispatch(patchActiveTaskSuccess(response.data));
  } catch (error) {
    dispatch(patchActiveTaskError(error.message));
  }
};

export const patchTaskSwitch = (taskId, date) => async dispatch => {
  dispatch(addBalanceTaskRequest());
  try {
    const { data } = await axios.patch(`/task/switch/${taskId}`, date);
    dispatch(addBalanceTaskSuccess(data));
    // console.log(data);
  } catch (error) {
    dispatch(addBalanceTaskError(error.message));
  }
};
