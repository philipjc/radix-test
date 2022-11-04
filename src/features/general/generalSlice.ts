import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getMealCategoriesAsync, iMealCategoriesList } from './api/mealCategories';

export interface iGeneralStateFetching {
  status: 'idle' | 'loading' | 'failed';
}

export interface iGeneralState {
  darkMode: boolean;
  value: number;
  fetching: iGeneralStateFetching;
  foodCategories: iMealCategoriesList;
}

const initialState: iGeneralState = {
  darkMode: false,
  value: 0,
  fetching: {
    status: 'idle',
  },
  foodCategories: {
    categories: [],
  },
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,

  reducers: {
    darkMode: (state: iGeneralState) => {
      state.darkMode = !state.darkMode;
      console.log('Dark mode: ', state.darkMode);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getMealCategoriesAsync.pending, (state: iGeneralState) => {
        console.log('pending');
      })
      .addCase(
        getMealCategoriesAsync.fulfilled,
        (state: iGeneralState, action: PayloadAction<iMealCategoriesList>) => {
          const { payload } = action;
          console.log('fulfilled');
          console.log(payload);
        }
      )
      .addCase(getMealCategoriesAsync.rejected, (state: iGeneralState) => {
        console.log('rejected');
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
