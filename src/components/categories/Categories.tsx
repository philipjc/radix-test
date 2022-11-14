import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMeals } from '../../features/general/hooks/useMeals';
import { Puff } from 'react-loader-spinner';
import {
  IconDefinition,
  faEgg,
  faAtom,
  faHourglass,
  faLeaf,
  faCarrot,
  faDrumstickBite,
  faBacon,
  faCow,
} from '@fortawesome/free-solid-svg-icons';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const CATEGORIES_AVAILABLE = [
  { text: 'Breakfast', id: 1, icon: faEgg },
  { text: 'Starter', id: 2, icon: faHourglass },
  { text: 'Vegetarian', id: 3, icon: faCarrot },
  { text: 'Vegan', id: 4, icon: faLeaf },
  { text: 'Chicken', id: 5, icon: faDrumstickBite },
  { text: 'Pork', id: 6, icon: faBacon },
  { text: 'Beef', id: 7, icon: faCow },
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
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
          {CATEGORIES_AVAILABLE.map(
            (cat: { text: string; id: number; icon: IconDefinition }, idx: number) => {
              return (
                <div
                  key={`category-${idx}`}
                  className="card mr-2 ml-2"
                  onClick={() => {
                    setActiveCat({ text: cat.text, id: cat.id });
                    fetchMeals(cat.text);
                  }}
                  style={{
                    marginBottom: '2em',
                    flex: 1,
                    maxWidth: '165px',
                    minWidth: '165px',
                    cursor: 'pointer',
                  }}
                >
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <FontAwesomeIcon icon={cat.icon} style={{ fontSize: '2.2em' }} />
                      </div>
                    </div>

                    <div className="content">
                      <p className="has-text-left"> {cat.text}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
