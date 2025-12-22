import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user';
import landingReducer from './features/landing';

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
      landing: landingReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
