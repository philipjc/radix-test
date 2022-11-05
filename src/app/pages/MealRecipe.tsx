import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../features/general/hooks/useMealRecipe';
import SharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = SharedStyled;

export function MealRecipe(): ReactElement {
  const { recipeState } = useMealRecipe();
  console.log(recipeState?.meals[0]);

  const recipeKeys = Object.keys(recipeState?.meals[0] || {});
  const ingredientProperty = 'strIngredient';
  const ingredientsKeysArray: Array<string> = recipeKeys
    .filter((key: string) => key.includes(ingredientProperty))
    .map((ingredientName: string) => recipeState?.meals[0][ingredientName]);

  console.log(ingredientsKeysArray);

  const recipe = recipeState?.meals[0];

  return (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 m-auto has-text-left">
        <div className="card">
          <div className="column is-flex">
            <div className="card-image column">
              <figure className="is-4by3">
                <img src={recipe['strMealThumb']} alt="Placeholder image" />
              </figure>
            </div>
            <div className="column has-text-centered">
              <p className="title is-4">{recipe['strMeal']}</p>
              <h3>Ingredients</h3>
              <ul className="ml-0 pl-4">
                {ingredientsKeysArray.map((ingredient: string, idx: number) => {
                  return (
                    ingredient && (
                      <li className="ml-0 pl-0" key={`ingredient-${idx}`}>
                        {ingredient}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="card-content">
            <div className="content is-flex p-6">
              <div className="column">
                <h3>Instructions</h3>
                {recipe['strInstructions'].split('.').map((line: string, idx: number) => (
                  <p key={`Instruction-line-${idx}`}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
