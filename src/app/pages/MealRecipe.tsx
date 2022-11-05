import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';
import SharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = SharedStyled;

export function MealRecipe(): ReactElement {
  const { recipeState } = useMealRecipe();

  const recipeKeys = Object.keys(recipeState?.meals[0] || {});
  const ingredientProperty = 'strIngredient';
  const ingredientsKeysArray: Array<string> = recipeKeys
    .filter((key: string) => key.includes(ingredientProperty))
    .map((ingredientName: string) => recipeState?.meals[0][ingredientName]);

  const { strMealThumb, strMeal, strInstructions } = recipeState?.meals[0] || {};

  return (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 m-auto has-text-left">
        <div className="card pt-6">
          <div className="column is-flex">
            <div className="card-image column mr-6 ml-6">
              <figure className="is-4by3">
                <img src={strMealThumb} alt={strMeal} />
              </figure>
            </div>
            <div className="column content has-text-left ml-6">
              <h2 className="title is-2">{strMeal}</h2>
              <div className="column">
                <h3>Ingredients</h3>
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
            </div>
          </div>

          <div className="card-content">
            <div className="content is-flex p-6">
              <div className="column">
                <h3 className="title is-3">Instructions</h3>
                <ul className="ml-0 pl-4">
                  {strInstructions &&
                    strInstructions.split('.').map((line: string, idx: number) => (
                      <li className="ml-0 mb-2 pl-0 is-size-5" key={`Instruction-line-${idx}`}>
                        {line}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
