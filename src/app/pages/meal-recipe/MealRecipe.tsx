import React, { ReactElement } from 'react';
import { useMealRecipe } from '../../../features/general/hooks/useMealRecipe';
import { useAppDispatch } from '../../hooks';
import { Ingredients } from './componentes/Ingredients';
import { Instructions } from './componentes/Instructions';

import SharedStyled from '../../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled, DMDivStyled } = SharedStyled;

export function MealRecipe(): ReactElement {
  const dispatch = useAppDispatch();
  const { recipeState, changeRecipeTab } = useMealRecipe();
  const { meals, tabView } = recipeState;

  const { strMealThumb, strMeal } = meals[0] || {};

  return (
    <DarkerDMSectionStyled className="section">
      <div className="column is-10 m-auto has-text-left">
        <DMDivStyled className="card pt-6">
          <div className="column is-flex">
            <div className="card-image column mr-6 ml-6">
              <figure className="is-4by3">
                <img src={strMealThumb} alt={strMeal} />
              </figure>
            </div>
            <div className="column content has-text-left">
              <h1 className="title is-2 mb-2">{strMeal}</h1>
              <nav className="tabs is-large m-0 p-0">
                <ul className="m-0 p-0 is-flex">
                  <li
                    onClick={() => dispatch(changeRecipeTab())}
                    className={tabView ? `mr-4` : `is-active mr-4`}
                    style={{ borderBottom: tabView ? `` : `1px solid #777`, cursor: 'pointer' }}
                  >
                    Ingredients
                  </li>
                  <li
                    onClick={() => dispatch(changeRecipeTab())}
                    className={!tabView ? `` : `is-active`}
                    style={{ borderBottom: !tabView ? `` : `1px solid #777`, cursor: 'pointer' }}
                  >
                    Instructions
                  </li>
                </ul>
              </nav>
              {tabView ? <Instructions /> : <Ingredients />}
            </div>
          </div>
        </DMDivStyled>
      </div>
    </DarkerDMSectionStyled>
  );
}
