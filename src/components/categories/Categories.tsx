import React, { useState } from 'react';
import { useMeals } from '../../features/general/hooks/useMeals';
import { Puff } from 'react-loader-spinner';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const CATEGORIES_AVAILABLE = [
  { text: 'Breakfast', id: 1 },
  { text: 'Starter', id: 2 },
  { text: 'Vegetarian', id: 3 },
  { text: 'Vegan', id: 4 },
  { text: 'Chicken', id: 5 },
  { text: 'Pork', id: 6 },
  { text: 'Lamb', id: 7 },
];

export function Categories() {
  const [activeCat, setActiveCat] = useState({ text: '', id: 0 });

  const {
    categories,
    food: { fetchMeals },
  } = useMeals();

  return (
    <DarkerDMSectionStyled className="section is-10 pt-0 pb-2">
      <div className="column is-10 ml-auto mr-auto pb-0">
        <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
          {CATEGORIES_AVAILABLE.map((cat: { text: string; id: number }, idx: number) => {
            return (
              <div
                className="card mr-2 ml-2"
                onClick={() => {
                  setActiveCat({ text: cat.text, id: cat.id });
                  fetchMeals(cat.text);
                }}
                style={{ marginBottom: '2em', flex: 1 }}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="content">
                    <p className="has-text-left"> {cat.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
