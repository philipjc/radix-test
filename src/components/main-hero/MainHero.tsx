import React, { ReactElement } from 'react';
import SharedStyled from '../../shared-styled/SharedStyled';
import { useMeals } from '../../features/general/hooks/useMeals';
import { Puff } from 'react-loader-spinner';
import { LazyImage } from '../lazy-image/LazyImage';
import { iCategory } from '../../features/general/api/mealCategories';

const { DarkerDMSectionStyled, AppConstrainSize } = SharedStyled;

export function MainHero(): ReactElement {
  const {
    categories,
    food: { fetchMeals },
  } = useMeals();

  const veg = categories.categories
    ? categories.categories.find((cat: iCategory) => cat.strCategory === 'Vegetarian')
    : null;

  return (
    <DarkerDMSectionStyled>
      <AppConstrainSize className="column is-10 ml-auto mr-auto m-auto">
        <DarkerDMSectionStyled className="hero is-large main-hero column is-12 m-auto">
          <div className="hero-body is-flex is-justify-content-space-between p-0 pl-6 pr-6 pt-6 pb-6">
            <div className="container is-flex is-flex-direction-column is-align-items-flex-start">
              <p className="title">Foode..</p>
              <p className="subtitle">Food for all the foode's</p>
            </div>
            <figure className="image column p-0">
              <LazyImage />
            </figure>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    {categories?.fetching ? (
                      <Puff
                        height="20"
                        width="20"
                        radius={1}
                        color="#0f3058"
                        ariaLabel="puff-loading"
                        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      <button onClick={() => fetchMeals()}>{veg?.strCategory}</button>
                    )}
                  </li>
                  <li>
                    <a href="/">Vegan</a>
                  </li>
                  <li>
                    <a href="/">Chicken</a>
                  </li>
                  <li>
                    <a href="/">Beef</a>
                  </li>
                  <li>
                    <a href="/">Deserts</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </DarkerDMSectionStyled>
      </AppConstrainSize>
    </DarkerDMSectionStyled>
  );
}
