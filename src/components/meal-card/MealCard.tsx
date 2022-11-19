import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iMeal } from '../../features/general/api/mealsByCategory';
import useBookmarking from '../../features/bookmarking/hooks/useBookmarking';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DMDivStyled } = sharedStyled;

export function MealCard(meal: iMeal) {
  const navigate = useNavigate();
  const bookmarking = useBookmarking();

  const { idMeal, strMeal } = meal;
  const RECIPE_URL = `/recipe/${idMeal}`;

  const { AddLiked } = bookmarking;

  return (
    <DMDivStyled
      onClick={() => navigate(RECIPE_URL)}
      className="card mr-2 ml-2 mb-6"
      style={{ maxWidth: 250, cursor: 'pointer' }}
    >
      <div className="card-image pb-0">
        <figure className="image is-4by3">
          <img src={meal.strMealThumb} alt={strMeal} />
        </figure>
      </div>
      <div className="card-content">
        <div
          className="media is-flex is-justify-content-space-between"
          style={{ flexShrink: 'none !important' }}
        >
          <p className="title is-5 has-text-left">{strMeal}</p>
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={e => {
              e.stopPropagation();
              return AddLiked({ id: meal.idMeal, meal: meal });
            }}
            style={{ fontSize: '1.2em', padding: 0, margin: 0, opacity: 0.5 }}
          />
        </div>

        <div className="content has-text-left">
          <p>Click the card to checkout this lovely meal</p>
        </div>
      </div>
    </DMDivStyled>
  );
}
