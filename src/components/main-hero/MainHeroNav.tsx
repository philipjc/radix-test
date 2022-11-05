import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { useMeals } from '../../features/general/hooks/useMeals';
// import { iCategory } from '../../features/general/api/mealCategories';

const CATEGORIES_AVAILABLE = [
  'Breakfast',
  'Starter',
  'Vegetarian',
  'Vegan',
  'Pasta',
  'Chicken',
  'Pork',
  'Lamb',
];

export function MainHeroNav() {
  const [activeCat, setActiveCat] = useState('');

  const {
    categories,
    food: { fetchMeals },
  } = useMeals();

  // const categoryList = categories.categories
  //   ? categories.categories.map((cat: iCategory) => cat.strCategory)
  //   : [];

  return (
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul className="is-flex is-justify-content-space-evenly">
          {CATEGORIES_AVAILABLE.map((cat: string, idx: number) => {
            return (
              <li
                className={activeCat === cat ? `is-active is-flex-grow-1` : `is-flex-grow-1`}
                key={`${cat}-${idx}`}
              >
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
                      onClick={() => {
                        setActiveCat(cat);
                        fetchMeals(cat);
                      }}
                      style={{
                        width: '100%',
                        border: 'none',
                        borderRadius: 0,
                        cursor: 'pointer',
                      }}
                    >
                      {cat}
                    </button>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
