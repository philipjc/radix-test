import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { MealCard } from '../meal-card/MealCard';
import { iUseMeals } from '../../features/general/state/interfaces/index.js';
import MealShimmer from '../meal-card/animations/MealShimmer';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const AnimateSpan = styled.span`
  @keyframes fadeInOpacity {
    from {
      opacity: 1;
    }

    30% {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInOpacityM {
    from {
      opacity: 1;
    }

    60% {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInOpacityE {
    from {
      opacity: 1;
    }

    80% {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  .dot-1 {
    animation: 2s infinite alternate fadeInOpacity;
  }

  .dot-2 {
    animation: 2s infinite alternate fadeInOpacityM;
  }

  .dot-3 {
    animation: 2s infinite alternate fadeInOpacityE;
  }
`;

export function MealsList(): ReactElement {
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  return meals.length < 1 ? (
    <div className="column is-10 m-auto pl-6">
      <h2 className="is-size-2 has-text-left">
        Select a category to get started
        {fetching ? (
          <AnimateSpan>
            <i className="dot-1">.</i>
            <i className="dot-2">.</i>
            <i className="dot-3">.</i>
          </AnimateSpan>
        ) : (
          <span>
            <i className="dot-1">.</i>
            <i className="dot-2">.</i>
            <i className="dot-3">.</i>
          </span>
        )}
      </h2>
    </div>
  ) : (
    <DarkerDMSectionStyled className="section is-10 pt-0">
      {fetching ? (
        <MealShimmer />
      ) : (
        <div className="column is-10 m-auto pb-0">
          <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
            {meals.map((meal: iMeal, idx: string) => {
              return <MealCard key={`${meal.strMeal}-${idx}`} {...meal} />;
            })}
          </div>
        </div>
      )}
    </DarkerDMSectionStyled>
  );
}
