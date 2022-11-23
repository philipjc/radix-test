import { iCategoryMealList, iMeal } from '../../api/mealsByCategory';
import { iMealRecipeState } from '../../api/mealRecipe';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { iCategoryModel } from '../generalStateModel';

interface iGeneralStateFetching {
  status: 'idle' | 'loading' | 'failed';
}

export interface iCurrentCategory {
  text: string;
  id: number;
  icon?: IconDefinition;
}

export interface iCategoryCard {
  category: iCategoryModel;
  id: number;
}

interface iUserFoodCategories {
  categories: Array<object>;
  current: iCurrentCategory | null;
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
  meals: any;
}

export interface iGeneralState {
  darkMode: boolean;
  value: number;
  fetching: iGeneralStateFetching;
  foodCategories: iMealCategoriesList;
  userFoodCategories: iUserFoodCategories;
  food: iCategoryMealList;
  recipe: iMealRecipeState;
}
