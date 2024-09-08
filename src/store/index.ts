import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createApi() } }),
});
