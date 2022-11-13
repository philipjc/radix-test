import React, { ReactElement } from 'react';
import { Triangle } from 'react-loader-spinner';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { MealCard } from '../meal-card/MealCard';

import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const FetchLoader = () => (
  <div className="column is-flex is-justify-content-center">
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
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
              <MealCard {...{ meal, idx }} />
            ))}
          </div>
        </div>
      )}
    </DarkerDMSectionStyled>
  );
}
