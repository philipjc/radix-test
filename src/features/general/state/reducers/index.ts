import { iGeneralState } from '../interfaces/index.js';
import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { getMealCategoriesAsync } from '../../api/mealCategories';
import { getMealByCategoryAsync, iCategoryMealList } from '../../api/mealsByCategory';
import { getMealRecipeAsync, iMealRecipeState } from '../../api/mealRecipe';

import { iMealCategoriesList, iCurrentCategory } from '../interfaces/index.js';
import { iLikedMeal } from '../../../bookmarking/state/bookmarkingSliceModel';
import produce from 'immer';
import { isRecipeBookmarked } from '../../../bookmarking/state/reducers/r-helpers';

const reducers = {
  darkMode: (state: iGeneralState) => {
    state.darkMode = !state.darkMode;
  },
  changeCurrentCategory: (state: iGeneralState, action: PayloadAction<iCurrentCategory>) => {
    const { payload } = action;
    state.userFoodCategories.current = payload;
  },
  removeCategory: (state: iGeneralState, action: PayloadAction<number>) => {
    console.log('HERRE');
    // TODO this remove by id is duplicated in bookmarking/state/reducers/r-helpers
    const { payload } = action;
    const updatedCategories = produce(state.userFoodCategories.categories, draft => {
      const index = state.userFoodCategories.categories.findIndex(
        (item: any) => item.id === payload
      );
      console.log(index);
      if (index !== -1) {
        // @ts-ignore
        draft[index].isVisible = false;
      }
    });

    console.log(updatedCategories);
    state.userFoodCategories.categories = [...updatedCategories];
  },
};

const getCategoriesAsync = (builder: ActionReducerMapBuilder<iGeneralState>) => {
  return builder
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
    });
};

const mealByCategoryAsync = (builder: ActionReducerMapBuilder<iGeneralState>) => {
  return builder
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
    });
};

const getRecipeAsync = (builder: ActionReducerMapBuilder<iGeneralState>) => {
  return builder
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
};

const generalReducers = {
  reducers: { ...reducers },
  extraAsync: (builder: ActionReducerMapBuilder<iGeneralState>) => {
    return {
      ...mealByCategoryAsync(builder),
      ...getCategoriesAsync(builder),
      ...getRecipeAsync(builder),
    };
  },
};

export default generalReducers;
