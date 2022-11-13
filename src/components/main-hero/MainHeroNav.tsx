import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { useMeals } from '../../features/general/hooks/useMeals';
// import { iCategory } from '../../features/general/api/mealCategories';

const CATEGORIES_AVAILABLE = [
  { text: 'Breakfast', id: 1 },
  { text: 'Starter', id: 2 },
  { text: 'Vegetarian', id: 3 },
  { text: 'Vegan', id: 4 },
  { text: 'Chicken', id: 5 },
  { text: 'Pork', id: 6 },
  { text: 'Lamb', id: 7 },
];

export function MainHeroNav() {
  const [activeCat, setActiveCat] = useState({ text: '', id: 0 });

  const {
    categories,
    food: { fetchMeals },
  } = useMeals();

  return (
    <nav className="tabs is-large is-fullwidth">
      <ul className="is-flex is-justify-content-left">
        {CATEGORIES_AVAILABLE.map((cat: { text: string; id: number }, idx: number) => {
          return (
            <li
              className={
                activeCat.text === cat.text ? `is-active is-flex-grow-1` : `is-flex-grow-1`
              }
              key={`${cat}-${idx}`}
              style={{ borderBottom: '1px solid grey' }}
            >
              {categories?.fetching ? (
                <Link to={''}>
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
                </Link>
              ) : (
                <Link
                  to={'/'}
                  onClick={() => {
                    setActiveCat({ text: cat.text, id: cat.id });
                    fetchMeals(cat.text);
                  }}
                >
                  {cat.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
