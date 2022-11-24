import { iMeal } from '../../general/api/mealsByCategory';

export interface iLikedMeal {
  id: string;
  meal: iMeal;
}

export interface iBookmarkingModel {
  hasLikes: boolean;
  likedMeals: Array<iLikedMeal>;
}

export const initialBMState: iBookmarkingModel = {
  hasLikes: false,
  likedMeals: [],
};
