import { createSlice } from '@reduxjs/toolkit';
import { initialBMState } from './bookmarkingSliceModel';
import { bookmarkingReducers } from './reducers';

export const bookmarkingSlice = createSlice({
  name: 'bookmarking',
  initialState: initialBMState,
  reducers: bookmarkingReducers.reducers,
  extraReducers: builder => bookmarkingReducers.extraAsync(builder),
});

export default bookmarkingSlice.reducer;
