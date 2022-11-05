import React from 'react';
import { Link } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iCategory } from '../../features/general/api/mealCategories';

export function MainHeroNav() {
  const {
    categories,
    food: { fetchMeals },
  } = useMeals();

  const veg = categories.categories
    ? categories.categories.find((cat: iCategory) => cat.strCategory === 'Vegetarian')
    : null;

  return (
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul className="is-flex is-justify-content-space-evenly">
          <li className="is-active is-flex-grow-1">
            {categories?.fetching ? (
              <button
                className="button"
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
              <Link to={'/'}>
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
              </Link>
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
  );
}
