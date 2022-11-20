import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../../../features/general/hooks/useMealRecipe';

export function Ingredients(): ReactElement {
  const { recipeState } = useMealRecipe();
  const { meals } = recipeState;

  const recipeKeys = Object.keys(meals[0] || {});
  const ingredientProperty = 'strIngredient';

  const ingredientsKeysArray: Array<string> = recipeKeys
    .filter((key: string) => key.includes(ingredientProperty))
    // @ts-ignore
    .map((ingredientName: string) => meals[0][ingredientName]);

  return (
    <div className="column">
      <ul className="ml-0 pl-4">
        {ingredientsKeysArray.map((ingredient: string, idx: number) => {
          return (
            ingredient && (
              <li className="ml-0 pl-0 is-size-5" key={`ingredient-${idx}`}>
                {ingredient}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
