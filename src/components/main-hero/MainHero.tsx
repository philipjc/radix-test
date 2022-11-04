import React from 'react';
import SharedStyled from '../../shared-styled/SharedStyled';
import MainHeroImage from '../../assets/images/hero-food-chop.jpg';
import { useMeals } from '../../features/general/hooks/useMeals';
import { Puff } from 'react-loader-spinner';
import { iCategory } from '../../features/general/api/mealCategories';

const { DarkerDMSectionStyled } = SharedStyled;

export function MainHero() {
  const {
    categories,
    food: { foodState, fetchMeals },
  } = useMeals();

  const veg = categories.categories
    ? categories.categories.find((cat: iCategory) => cat.strCategory === 'Vegetarian')
    : null;

  const foodList = foodState;

  console.log(foodList);

  return (
    <DarkerDMSectionStyled className="hero is-large main-hero">
      <div className="hero-body is-flex is-justify-content-space-between pt-6 pb-6">
        <div className="container is-flex is-flex-direction-column is-align-items-flex-start">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
        <figure className="image column">
          <img src={MainHeroImage} alt="main hero image" />
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
  );
}
