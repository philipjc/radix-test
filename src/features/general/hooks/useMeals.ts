import { getMealCategoriesAsync } from '../api/mealCategories';
import { iMealCategoriesList } from '../api/mealCategories';
import { useAppDispatch } from '../../../app/hooks';

interface iUseMeals {
  categories: iMealCategoriesList | any;
}

export function useMeals(): iUseMeals {
  const dispatch = useAppDispatch();

  const categories = dispatch(getMealCategoriesAsync());
  console.log(categories);

  return {
    categories: categories,
  };
}
