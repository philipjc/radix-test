import { useEffect } from 'react';
import { getMealRecipeAsync } from '../api/mealRecipe';
import { useAppDispatch } from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { selectRecipeState } from '../state/generalSlice';

interface iUseRecipeState {
  fetchRecipe: any;
  recipeState: any;
}

export function useMealRecipe(): iUseRecipeState {
  const dispatch = useAppDispatch();

  useEffect(() => {
    /* eslint-disable */
    fetchRecipe();
  }, []);

  function fetchRecipe(id: string = '52772') {
    return dispatch(getMealRecipeAsync(id));
  }

  const recipeState = useAppSelector(selectRecipeState);

  return {
    fetchRecipe,
    recipeState,
  };
}
