import React from 'react';
import { useNavigate } from 'react-router';
import sharedStyled from '../../shared-styled/SharedStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const { DMDivStyled } = sharedStyled;

export function MealCard({ meal }: any) {
  const navigate = useNavigate();
  const { idMeal, strMeal } = meal;
  const RECIPE_URL = `/recipe/${idMeal}`;

  return (
    <DMDivStyled
      onClick={() => navigate(RECIPE_URL)}
      className="card mr-2 ml-2"
      style={{ maxWidth: 250, marginBottom: 80, cursor: 'pointer' }}
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
