import { useEffect } from 'react';
import { getMealRecipeAsync, iMealRecipeState } from '../api/mealRecipe';
import { useAppDispatch } from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router';
import { selectRecipeState } from '../state/accessors';

interface iUseRecipeState {
  fetchRecipe: () => {};
  recipeState: iMealRecipeState;
}

const BACK_UP_MEAL_CHICKEN_TERIYAKI_CASSEROLE = '52772';

export function useMealRecipe(): iUseRecipeState {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { recipeId } = params;

  useEffect(() => {
    /* eslint-disable */
    fetchRecipe(recipeId);
  }, []);

  function fetchRecipe(id: string = BACK_UP_MEAL_CHICKEN_TERIYAKI_CASSEROLE) {
    return dispatch(getMealRecipeAsync(id));
  }

  const recipeState = useAppSelector(selectRecipeState);

  return {
    fetchRecipe,
    recipeState,
  };
}
