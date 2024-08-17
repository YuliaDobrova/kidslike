/** @format */
import { configureStore } from '@reduxjs/toolkit';
import weekReducer from './weekTabs/weekReducer';
import authReducer from './auth/authReducer';
import tasksReducer from './tasks/tasksReducer';
import awardsReducer from './awards/awardsReducer';
import taskModalReducer from './taskModal/taskModalReducer';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    weekInfo: weekReducer,
    tasks: tasksReducer,
    taskModal: taskModalReducer,
    awards: awardsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const defaultStore = { store, persistor };
export default defaultStore;
