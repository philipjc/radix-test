import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStatePageObserver } from './pageObserverStateModel';
import { iPageObserverState } from './interfaces';

export const pageObserverSlice = createSlice({
  name: 'general',
  initialState: initialStatePageObserver,

  reducers: {
    updateHeroSection: (state: iPageObserverState, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.hero.inView = payload;
    },
  },

  extraReducers: builder => builder,
});

export const { updateHeroSection } = pageObserverSlice.actions;

export default pageObserverSlice.reducer;
