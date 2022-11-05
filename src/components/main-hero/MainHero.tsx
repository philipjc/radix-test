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
              <h2 className="title is-2">Foode..</h2>
              <h5 className="subtitle is-5">Food for all the foode's</h5>
            </div>
            <figure className="image column p-0">
              <LazyImage />
            </figure>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul className="is-flex is-justify-content-space-evenly">
                  <li className="is-active is-flex-grow-1">
                    {categories?.fetching ? (
                      <button
                        className="button"
                        onClick={() => fetchMeals()}
                        style={{
                          width: '100%',
                          border: 'none',
                          borderRadius: 0,
                          cursor: 'pointer',
                        }}
                      >
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
                      </button>
                    ) : (
                      <button
                        className="button"
                        onClick={() => fetchMeals()}
                        style={{
                          width: '100%',
                          border: 'none',
                          borderRadius: 0,
                          cursor: 'pointer',
                        }}
                      >
                        {veg?.strCategory}
                      </button>
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
