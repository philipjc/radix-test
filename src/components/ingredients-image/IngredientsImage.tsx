import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';

export function IngredientsImage(): ReactElement {
  const { recipeState } = useMealRecipe();

  const { meals } = recipeState;
  const meal = meals[0] || {};
  const { strMealThumb, strMeal } = meal;

  return (
    <figure className="is-4by3 p-3">
      <img src={strMealThumb} alt={strMeal} style={{ borderRadius: '15px' }} />
    </figure>
  );
}
