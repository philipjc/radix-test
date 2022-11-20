import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../../../features/general/hooks/useMealRecipe';

export function Ingredients(): ReactElement {
  const { recipeState } = useMealRecipe();
  const { meals } = recipeState;

  const recipeKeys = Object.keys(meals[0] || {});
  const ingredientProperty = 'strIngredient';

  const ingredients: Array<string> = recipeKeys
    .filter((key: string) => key.includes(ingredientProperty))
    // @ts-ignore
    .map((ingredientName: string) => meals[0][ingredientName]);

  const measureProperty = 'strMeasure';

  const measures: Array<string> = recipeKeys
    .filter((key: string) => key.includes(measureProperty))
    // @ts-ignore
    .map((ingredientName: string) => meals[0][ingredientName]);

  return (
    <div className="column">
      <h2>Ingredients</h2>
      <ul className="ml-0 pl-4">
        {ingredients.map((ingredient: string, idx: number) => {
          return (
            ingredient && (
              <li className="is-size-6 mb-3" key={`ingredient-${idx}`}>
                <div className="is-flex is-justify-content-space-between">
                  <span className="is-flex-grow-1"> {ingredient}</span>
                  <span className="has-text-right">{measures[idx]}</span>
                </div>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
