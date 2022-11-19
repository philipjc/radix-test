import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { iMeal } from '../../../general/api/mealsByCategory';

const someAsync = (builder: ActionReducerMapBuilder<any>) => {
  return builder;
};

const regularReducers = {
  addLikedRecipe: (state: any, action: PayloadAction<iMeal>) => {
    const { payload } = action;
    return state;
  },
};

export const bookmarkingReducers = {
  reducers: { ...regularReducers },
  extraAsync: (builder: ActionReducerMapBuilder<any>) => ({ ...someAsync(builder) }),
};
