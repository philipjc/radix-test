import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { Triangle } from 'react-loader-spinner';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

export function MealsList(): ReactElement {
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  return fetching ? (
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
  ) : (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 ml-auto mr-auto">
        <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
          {meals.map((meal: iMeal) => (
            <Link to={'/recipe'}>
              <div
                className="card mr-2 ml-2 is-flex-grow-1"
                style={{ maxWidth: 250, marginBottom: 80 }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={meal.strMealThumb} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <p className="title is-4 is-flex is-align-content-start">{meal.strMeal}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>Click the card to checkout this lovely meal</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}