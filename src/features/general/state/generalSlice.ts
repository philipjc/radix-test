import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './generalStateModel';
import generalReducers from './reducers';

export const generalSlice = createSlice({
  name: 'general',
  initialState,

  reducers: generalReducers.reducers,

  extraReducers: builder => generalReducers.extraAsync(builder),
});

export default generalSlice.reducer;

// ==== THUNK REF =====
// ====================
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };
