import { configureStore } from '@reduxjs/toolkit';
import searchRobotsReducer from './searchRobotsSlice';
import requestRobotsReducer from './requestRobotsSlice';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    searchRobots: searchRobotsReducer,
    requestRobots: requestRobotsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
