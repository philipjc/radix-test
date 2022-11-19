import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { iBookmarkingModel, iLikedMeal } from '../bookmarkingSliceModel';
import produce from 'immer';

const someAsync = (builder: ActionReducerMapBuilder<any>) => {
  return builder;
};

const regularReducers = {
  addLikedRecipe: (state: iBookmarkingModel, action: PayloadAction<iLikedMeal>) => {
    const { payload } = action;
    const updatedLikedMeals = produce(state.likedMeals, draft => {
      const index = draft.findIndex(meal => meal.id === payload.id);
      if (index !== -1) draft.splice(index, 1);
    });
    state.likedMeals = [...updatedLikedMeals, payload];
    state.hasLikes = state.likedMeals.length > 0;
  },
};

export const bookmarkingReducers = {
  reducers: { ...regularReducers },
  extraAsync: (builder: ActionReducerMapBuilder<any>) => ({ ...someAsync(builder) }),
};
