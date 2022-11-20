import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { iBookmarkingModel, iLikedMeal } from '../bookmarkingSliceModel';
import { addItemToArray, removeItemById } from './r-helpers';

const someAsync = (builder: ActionReducerMapBuilder<any>) => {
  return builder;
};

const regularReducers = {
  addLikedRecipe: (state: iBookmarkingModel, action: PayloadAction<iLikedMeal>) => {
    const { payload } = action;
    const { likedMeals } = state;

    const recipeAlreadyAdded = likedMeals.findIndex(item => item.id === payload.id);
    if (recipeAlreadyAdded !== -1) return;

    const updatedLikedMeals = addItemToArray(likedMeals, payload);

    state.likedMeals = [...updatedLikedMeals];
    state.hasLikes = state.likedMeals.length > 0;
  },
  removeLikedRecipe: (state: iBookmarkingModel, action: PayloadAction<iLikedMeal>) => {
    const { payload } = action;
    const { likedMeals } = state;

    const recipeAlreadyAdded = likedMeals.findIndex(item => item.id === payload.id);
    if (recipeAlreadyAdded === -1) return;

    const updatedLikedMeals = removeItemById(likedMeals, payload);

    state.likedMeals = [...updatedLikedMeals];
    state.hasLikes = state.likedMeals.length > 0;
  },
};

export const bookmarkingReducers = {
  reducers: { ...regularReducers },
  extraAsync: (builder: ActionReducerMapBuilder<any>) => ({ ...someAsync(builder) }),
};
