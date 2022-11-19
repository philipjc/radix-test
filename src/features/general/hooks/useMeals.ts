import { useAppDispatch } from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { getMealByCategoryAsync } from '../api/mealsByCategory';
import { selectFoodCategoriesState, selectFoodState } from '../state/accessors';
import { iUseMeals } from '../state/interfaces/index.js';

export function useMeals(): iUseMeals {
  const dispatch = useAppDispatch();

  function fetchMeals(cat: string) {
    return dispatch(getMealByCategoryAsync(cat));
  }

  const categoriesState = useAppSelector(selectFoodCategoriesState);
  const foodState = useAppSelector(selectFoodState);

  const { meals } = foodState;

  return {
    get meals() {
      return meals;
    },
    categories: {
      ...categoriesState,
    },
    food: {
      fetchMeals,
      foodState,
    },
  };
}
