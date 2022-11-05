import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { getMealCategoriesAsync, iMealCategoriesList } from '../api/mealCategories';
import { getMealByCategoryAsync, iCategoryMealList } from '../api/mealsByCategory';
import { getMealRecipeAsync, iMealRecipeState } from '../api/mealRecipe';

export interface iGeneralStateFetching {
  status: 'idle' | 'loading' | 'failed';
}

export interface iGeneralState {
  darkMode: boolean;
  value: number;
  fetching: iGeneralStateFetching;
  foodCategories: iMealCategoriesList;
  food: iCategoryMealList;
  recipe: iMealRecipeState;
}

const initialState: iGeneralState = {
  darkMode: false,
  value: 0,
  fetching: {
    status: 'idle',
  },
  foodCategories: {
    fetching: false,
    categories: [],
  },
  food: {
    fetching: false,
    meals: [],
  },
  recipe: {
    fetching: false,
    meals: [],
  },
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,

  reducers: {
    darkMode: (state: iGeneralState) => {
      state.darkMode = !state.darkMode;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getMealCategoriesAsync.pending, (state: iGeneralState) => {
        state.foodCategories.fetching = true;
      })
      .addCase(
        getMealCategoriesAsync.fulfilled,
        (state: iGeneralState, action: PayloadAction<iMealCategoriesList>) => {
          const { payload } = action;
          state.foodCategories.categories = [...payload.categories];
          state.foodCategories.fetching = false;
        }
      )
      .addCase(getMealCategoriesAsync.rejected, (state: iGeneralState) => {
        state.foodCategories.fetching = false;
      })

      // Meals async
      .addCase(getMealByCategoryAsync.pending, (state: iGeneralState) => {
        state.food.fetching = true;
      })
      .addCase(
        getMealByCategoryAsync.fulfilled,
        (state: iGeneralState, action: PayloadAction<iCategoryMealList>) => {
          const { payload } = action;
          state.food.meals = [...payload.meals];
          state.food.fetching = false;
        }
      )
      .addCase(getMealByCategoryAsync.rejected, (state: iGeneralState) => {
        state.food.fetching = false;
      })

      // Recipe async
      .addCase(getMealRecipeAsync.pending, (state: iGeneralState) => {
        state.recipe.fetching = true;
      })
      .addCase(
        getMealRecipeAsync.fulfilled,
        (state: iGeneralState, action: PayloadAction<iMealRecipeState>) => {
          const { payload } = action;
          state.recipe.meals = [...payload.meals];
          state.recipe.fetching = false;
        }
      )
      .addCase(getMealRecipeAsync.rejected, (state: iGeneralState) => {
        state.recipe.fetching = false;
      });
  },
});

export const { darkMode } = generalSlice.actions;
export const selectDarkMode = (state: RootState) => state.general.darkMode;
export const selectFoodCategoriesState = (state: RootState) => state.general.foodCategories;
export const selectFoodState = (state: RootState) => state.general.food;
export const selectRecipeState = (state: RootState) => state.general.recipe;

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
