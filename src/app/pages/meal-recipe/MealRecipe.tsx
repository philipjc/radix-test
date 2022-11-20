import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useMealRecipe } from '../../../features/general/hooks/useMealRecipe';
import { Ingredients } from './components/Ingredients';
import { Instructions } from './components/Instructions';
import useBookmarking from '../../../features/bookmarking/hooks/useBookmarking';
import SharedStyled from '../../../shared-styled/SharedStyled';
import { BackButton } from '../../../components/back-button/BackButton';

const { DarkerDMSectionStyled, DMDivStyled } = SharedStyled;

export function MealRecipe(): ReactElement {
  const { recipeState } = useMealRecipe();
  const { isRecipeLiked } = useBookmarking();
  const { meals } = recipeState;

  const meal = meals[0] || {};
  const { strMealThumb, strMeal, idMeal, strTags, strArea, strCategory } = meal;

  const isLiked = isRecipeLiked(String(idMeal));

  return (
    <>
      <BackButton />
      <DarkerDMSectionStyled className="section">
        <div className="column is-10 m-auto has-text-left">
          <DMDivStyled className="is-flex">
            <div className="column content is-4">
              <figure className="is-4by3">
                <img src={strMealThumb} alt={strMeal} />
              </figure>
              <Ingredients />
            </div>
            <div className="column is-8 content has-text-left">
              <header className="is-flex is-justify-content-space-between is-align-items-center is-relative">
                <h1 className="title is-1 mb-2">{strMeal}</h1>
                {isLiked && (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{
                      position: 'absolute',
                      top: -20,
                      right: 10,
                      fontSize: '1.8em',
                      color: 'rgba(110,150,215, .7)',
                    }}
                  />
                )}
              </header>

              <div className="container">
                <span className="tag mr-4">{strArea}</span>
                <span className="tag mr-4">{strCategory}</span>
                {strTags && strTags.split(',').map(tag => <span className="tag mr-4">{tag}</span>)}
              </div>

              <Instructions />
            </div>
          </DMDivStyled>
        </div>
      </DarkerDMSectionStyled>
    </>
  );
}
