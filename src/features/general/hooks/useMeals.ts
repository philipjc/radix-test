import { useEffect } from 'react';
import { getMealCategoriesAsync } from '../api/mealCategories';
import { useAppDispatch } from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { getMealByCategoryAsync } from '../api/mealsByCategory';
import { selectFoodCategoriesState, selectFoodState } from '../state/accessors';
import { iUseMeals } from '../state/interfaces/index.js';

export function useMeals(): iUseMeals {
  const dispatch = useAppDispatch();

  useEffect(() => {
    /* eslint-disable */
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
