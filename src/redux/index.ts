import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import idSlice from './slices/idSlice';

export const rootReducer = combineReducers({
  news: newsSlice,
  id: idSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
