import { createSlice } from '@reduxjs/toolkit';
import { initialBMState } from './bookmarkingSliceModel';
import { bookmarkingReducers } from './reducers';

export const bookmarkingSlice = createSlice({
  name: 'bookmarking',
  initialState: initialBMState,
  reducers: {},
  extraReducers: builder => bookmarkingReducers.extraAsync(builder),
});
