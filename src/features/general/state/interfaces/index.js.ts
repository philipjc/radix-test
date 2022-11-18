import { iCategoryMealList, iMeal } from '../../api/mealsByCategory';
import { iMealRecipeState } from '../../api/mealRecipe';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface iGeneralStateFetching {
  status: 'idle' | 'loading' | 'failed';
}

export interface CurrentCategory {
  text: string;
  id: number;
  icon: IconDefinition;
}

interface UserFoodCategories {
  categories: Array<object>;
  current: CurrentCategory;
}

export interface iCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface iMealCategoriesList {
  fetching: boolean;
  categories: Array<iCategory>;
}

interface FoodState {
  fetchMeals: iCategoryMealList | any;
  foodState: Array<iMeal> | any;
}

export interface iUseMeals {
  categories: iMealCategoriesList | any;
  food: FoodState;
}

export interface iGeneralState {
  darkMode: boolean;
  value: number;
  fetching: iGeneralStateFetching;
  foodCategories: iMealCategoriesList;
  userFoodCategories: UserFoodCategories;
  food: iCategoryMealList;
  recipe: iMealRecipeState;
}