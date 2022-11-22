import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';
import { iMealRecipe } from '../../features/general/api/mealRecipe';

interface IListProps {
  quantity: number;
}

const API_STRING_INGREDIENT = 'strIngredient';
const API_STRING_MEASURE = 'strMeasure';

const findIngredients = (meals: Array<iMealRecipe>, recipeKeys: Array<string>): Array<string> => {
  return (
    recipeKeys
      .filter((key: string) => key.includes(API_STRING_INGREDIENT))
      // @ts-ignore
      .map((ingredientName: string) => meals[0][ingredientName])
  );
};

const findMeasures = (
  meals: Array<iMealRecipe>,
  recipeKeys: Array<string>,
  quantity: number
): Array<string> => {
  return (
    recipeKeys
      .filter((key: string) => key.includes(API_STRING_MEASURE))
      // @ts-ignore
      .map((ingredientName: string) => meals[0][ingredientName])
  );
};

export function IngredientsList({ quantity }: IListProps): ReactElement {
  const { recipeState } = useMealRecipe();

  const { meals } = recipeState;
  const recipeKeys = Object.keys(meals[0] || {});

  const ingredients = findIngredients(meals, recipeKeys);
  const measures = findMeasures(meals, recipeKeys, quantity);

  return (
    <div className="column content">
      <h2>Ingredients</h2>
      <ul className="ml-0 pl-4">
        {ingredients.map((ingredient: string, idx: number) => {
          return (
            ingredient && (
              <li className="is-size-6 mb-3" key={`ingredient-${idx}`}>
                <div className="is-flex is-justify-content-space-between">
                  <span className="is-flex-grow-1">{ingredient}</span>
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
