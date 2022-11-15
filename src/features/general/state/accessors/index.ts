import { RootState } from '../../../../app/store';

export const selectDarkMode = (state: RootState) => state.general.darkMode;
export const selectFoodCategoriesState = (state: RootState) => state.general.foodCategories;
export const selectFoodState = (state: RootState) => state.general.food;
export const selectRecipeState = (state: RootState) => state.general.recipe;
export const selectUserCategoriesState = (state: RootState) => state.general.userFoodCategories;
