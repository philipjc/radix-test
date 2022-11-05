import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';

export function MealRecipe(): ReactElement {
  const { recipeState } = useMealRecipe();

  console.log(recipeState?.meals[0]);

  return <div className="meal-recipe">Meal recipe</div>;
}
