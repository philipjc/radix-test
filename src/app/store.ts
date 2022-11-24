import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import generalReducer from '../features/general/state/generalSlice';
import pageObserverReducer from '../features/page-observer/pageObserverSlice';
import bookmarkingReducer from '../features/bookmarking/state/bookmarkingSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    pageObserver: pageObserverReducer,
    bookmarking: bookmarkingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
