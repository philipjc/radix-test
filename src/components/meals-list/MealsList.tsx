import React, { ReactElement } from 'react';
import { Triangle } from 'react-loader-spinner';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { MealCard } from '../meal-card/MealCard';
import { GreekMealCard } from '../meal-card/MealCard';

import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const FetchLoader = () => (
  <div className="column is-10 ml-auto mr-auto pb-0">
    <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        return <GreekMealCard />;
      })}
    </div>
  </div>
);

export function MealsList(): ReactElement {
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  return (
    <DarkerDMSectionStyled className="section is-10 pt-0">
      {fetching ? (
        <FetchLoader />
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
