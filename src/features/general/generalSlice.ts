import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// import { AppThunk } from '../../app/store';
import { fetchCount } from './generalAPI';

export interface GeneralStateFetching {
  status: 'idle' | 'loading' | 'failed';
}

export interface GeneralState {
  darkMode: boolean;
  value: number;
  fetching: GeneralStateFetching;
}

const initialState: GeneralState = {
  darkMode: false,
  value: 0,
  fetching: {
    status: 'idle',
  },
};

export const incrementAsync = createAsyncThunk('general/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const generalSlice = createSlice({
  name: 'general',
  initialState,

  reducers: {
    darkMode: (state: GeneralState) => {
      state.darkMode = !state.darkMode;
      console.log('Dark mode: ', state.darkMode);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, (state: GeneralState) => {
        state.fetching.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state: GeneralState, action: PayloadAction<number>) => {
        state.fetching.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state: GeneralState) => {
        state.fetching.status = 'failed';
      });
  },
});

export const { darkMode } = generalSlice.actions;
export const selectDarkMode = (state: RootState) => state.general.darkMode;

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

export default generalSlice.reducer;
