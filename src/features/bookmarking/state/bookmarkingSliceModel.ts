import { iMeal } from '../../general/api/mealsByCategory';

export interface iBookmarkingModel {
  hasLikes: boolean;
  likedMeals: Array<iMeal>;
}

export const initialBMState: iBookmarkingModel = {
  hasLikes: false,
  likedMeals: [],
};
