import { RootState } from '../../../../app/store';

export const selectAddLikedRecipes = (state: RootState) => state.bookmarking.likedMeals;
export const selectHasLikedRecipes = (state: RootState) => state.bookmarking.hasLikes;
