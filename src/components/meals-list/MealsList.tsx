import React, { ReactElement } from 'react';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { MealCard } from '../meal-card/MealCard';
import { iUseMeals } from '../../features/general/state/interfaces/index.js';
import MealShimmer from '../meal-card/animations/MealShimmer';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

export function MealsList(): ReactElement {
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  return (
    <DarkerDMSectionStyled className="section is-10 pt-0">
      {fetching ? (
        <MealShimmer />
      ) : (
        <div className="column is-10 ml-auto mr-auto pb-0">
          <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
            {meals.map((meal: iMeal, idx: string) => (
              <MealCard key={idx} {...{ meal }} />
            ))}
          </div>
        </div>
      )}
    </DarkerDMSectionStyled>
  );
}
