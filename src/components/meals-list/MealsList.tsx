import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/hooks/useMeals';
import { iMeal } from '../../features/general/api/mealsByCategory';
import { Triangle } from 'react-loader-spinner';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled, DMDivStyled } = sharedStyled;

export function MealsList(): ReactElement {
  const navigate = useNavigate();
  const {
    food: {
      foodState: { fetching, meals },
    },
  }: iUseMeals = useMeals();

  function loadRecipe(id: string) {
    navigate(`/recipe/${id}`);
  }

  return (
    <DarkerDMSectionStyled className="section">
      {fetching ? (
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
      ) : (
        <div className="column is-10 ml-auto mr-auto">
          <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
            {meals.map((meal: iMeal, idx: string) => (
              <DMDivStyled
                key={`meal-${idx}`}
                onClick={() => loadRecipe(meal?.idMeal)}
                className="card mr-2 ml-2 is-flex-grow-1"
                style={{ maxWidth: 250, marginBottom: 80, cursor: 'pointer' }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
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
              </DMDivStyled>
            ))}
          </div>
        </div>
      )}
    </DarkerDMSectionStyled>
  );
}
