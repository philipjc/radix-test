import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { iBookmarkingModel, iLikedMeal } from '../bookmarkingSliceModel';

const someAsync = (builder: ActionReducerMapBuilder<any>) => {
  return builder;
};

const regularReducers = {
  addLikedRecipe: (state: iBookmarkingModel, action: PayloadAction<iLikedMeal>) => {
    const { payload } = action;
    state.likedMeals = [...state.likedMeals, payload];
    state.hasLikes = state.likedMeals.length > 0;
  },
};

export const bookmarkingReducers = {
  reducers: { ...regularReducers },
  extraAsync: (builder: ActionReducerMapBuilder<any>) => ({ ...someAsync(builder) }),
};
