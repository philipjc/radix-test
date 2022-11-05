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
          <div className="card-content">
            <div className="media is-flex is-flex-direction-column is-align-items-center p-6">
              <div className="media-content has-text-centered mb-5">
                <p className="title is-4">{recipe['strMeal']}</p>
              </div>
              <figure className="image is-128x128 mb-5">
                <img
                  className="is-rounded is-responsive"
                  src={recipe['strMealThumb']}
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div className="content is-flex p-2">
              <div className="column">
                <h3>Instructions</h3>
                {recipe['strInstructions'].split('.').map((line: string, idx: number) => (
                  <p key={`Instruction-line-${idx}`}>{line}</p>
                ))}
              </div>
              <div className="column is-3 ml-6">
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
          </div>
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
