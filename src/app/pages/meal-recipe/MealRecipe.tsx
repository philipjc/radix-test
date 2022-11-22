import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useMealRecipe } from '../../../features/general/hooks/useMealRecipe';
import useBookmarking from '../../../features/bookmarking/hooks/useBookmarking';
import { RecipeInstructions } from '../../../components/recipe-instructions/RecipeInstructions';
import SharedStyled from '../../../shared-styled/SharedStyled';
import { Ingredients } from '../../../components/ingredients/Ingredients';

const { DarkerDMSectionStyled, DMDivStyled } = SharedStyled;

export function MealRecipe(): ReactElement {
  const { recipeState } = useMealRecipe();
  const { isRecipeLiked } = useBookmarking();
  const { meals } = recipeState;

  const meal = meals[0] || {};
  const { strMeal, idMeal, strTags, strArea, strCategory } = meal;

  const isLiked = isRecipeLiked(String(idMeal));

  return (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 m-auto has-text-left">
        <DMDivStyled className="is-flex">
          <div className="column is-4">
            <Ingredients />
          </div>
          <div className="column is-8 content has-text-left">
            <header
              className="is-flex is-justify-content-space-between is-align-items-center is-relative mb-6 mt-4 pt-4"
              style={{
                borderBottom: '2px solid rgba(110,150,215, .3)',
                borderTop: '2px solid rgba(110,150,215, .3)',
              }}
            >
              <h1 className="title is-1">{strMeal}</h1>
              {isLiked && (
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    position: 'absolute',
                    top: -24,
                    right: 12,
                    fontSize: '2.8em',
                    color: 'rgba(110,150,215, .7)',
                  }}
                />
              )}
            </header>

            <div className="container mb-5">
              <span className="tag mr-4">{strArea}</span>
              <span className="tag mr-4">{strCategory}</span>
              {strTags &&
                strTags.split(',').map((tag, idx) => (
                  <span key={`${tag}-${idx}`} className="tag mr-4">
                    {tag}
                  </span>
                ))}
            </div>

            <RecipeInstructions />
          </div>
        </DMDivStyled>
      </div>
    </DarkerDMSectionStyled>
  );
}
