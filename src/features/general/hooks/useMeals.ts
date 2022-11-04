import { useEffect } from 'react';
import { getMealCategoriesAsync } from '../api/mealCategories';
import { iMealCategoriesList } from '../api/mealCategories';
import { useAppDispatch } from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { selectFoodCategoriesState, selectFoodState } from '../generalSlice';
import { getMealByCategoryAsync, iCategoryMealList, iMeal } from '../api/mealsByCategory';

interface FoodState {
  fetchMeals: iCategoryMealList | any;
  foodState: Array<iMeal> | any;
}

interface iUseMeals {
  categories: iMealCategoriesList | any;
  food: FoodState;
}

export function useMeals(): iUseMeals {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMealCategoriesAsync());
  }, []);

  function fetchMeals(cat: string) {
    return dispatch(getMealByCategoryAsync(cat));
  }

  const categoriesState = useAppSelector(selectFoodCategoriesState);
  const foodState = useAppSelector(selectFoodState);

  return {
    categories: {
      ...categoriesState,
    },
    food: {
      fetchMeals,
      foodState,
    },
  };
}
