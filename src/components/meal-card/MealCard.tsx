import React from 'react';
import sharedStyled from '../../shared-styled/SharedStyled';
import { useNavigate } from 'react-router';

const { DMDivStyled } = sharedStyled;

export function GreekMealCard() {
  return (
    <div className="card shimmer-card mb-6" style={{ width: '300px' }}>
      <div className="shimmer">
        <div className="_2iwr"></div>
        <div className="_2iws"></div>
        <div className="_2iwt"></div>
        <div className="_2iwu"></div>
        <div className="_2iwv"></div>
        <div className="_2iww"></div>
        <div className="_2iwx"></div>
        <div className="_2iwy"></div>
        <div className="_2iwz"></div>
        <div className="_2iw-"></div>
        <div className="_2iw_"></div>
        <div className="_2ix0"></div>
      </div>
    </div>
  );
}

export function MealCard({ meal }: any) {
  const navigate = useNavigate();
  const { idMeal, strMeal } = meal;

  return (
    <DMDivStyled
      onClick={() => navigate(`/recipe/${idMeal}`)}
      className="card mr-2 ml-2"
      style={{ maxWidth: 250, marginBottom: 80, cursor: 'pointer' }}
    >
      <div className="card-image pb-0">
        <figure className="image is-4by3">
          <img src={meal.strMealThumb} alt={strMeal} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media is-block">
          <div className="media-left" style={{ flexShrink: 'none !important' }}>
            <p className="title is-5 has-text-left">{strMeal}</p>
          </div>
        </div>

        <div className="content has-text-left">
          <p>Click the card to checkout this lovely meal</p>
        </div>
      </div>
    </DMDivStyled>
  );
}
