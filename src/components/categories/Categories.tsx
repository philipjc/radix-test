import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMeals } from '../../features/general/hooks/useMeals';
import {
  IconDefinition,
  faEgg,
  faHourglass,
  faLeaf,
  faCarrot,
  faDrumstickBite,
  faBacon,
  faCow,
  faFish,
} from '@fortawesome/free-solid-svg-icons';
import sharedStyled from '../../shared-styled/SharedStyled';

const { DarkerDMSectionStyled } = sharedStyled;

const CATEGORIES_AVAILABLE = [
  { text: 'Breakfast', id: 1, icon: faEgg },
  { text: 'Starter', id: 2, icon: faHourglass },
  { text: 'Vegetarian', id: 3, icon: faCarrot },
  { text: 'Vegan', id: 4, icon: faLeaf },
  { text: 'Seafood', id: 5, icon: faFish },
  { text: 'Chicken', id: 6, icon: faDrumstickBite },
  { text: 'Pork', id: 7, icon: faBacon },
  { text: 'Beef', id: 8, icon: faCow },
];

const HoverStyle = styled.div`
  &:hover {
    opacity: 0.6 !important;
    color: #444;
  }
`;

export function Categories() {
  const [activeCat, setActiveCat] = useState({ text: '', id: 0 });

  const {
    food: { fetchMeals },
  } = useMeals();

  return (
    <DarkerDMSectionStyled className="section is-10 pt-0 pb-2">
      <div className="column is-10 ml-auto mr-auto pb-0">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
          {CATEGORIES_AVAILABLE.map(
            (cat: { text: string; id: number; icon: IconDefinition }, idx: number) => {
              return (
                <HoverStyle
                  key={`category-${idx}`}
                  className="card mr-2 ml-2 category-card"
                  onClick={() => {
                    setActiveCat({ text: cat.text, id: cat.id });
                    fetchMeals(cat.text);
                  }}
                  style={{
                    opacity: activeCat.text !== cat.text ? '.4' : 1,
                    marginBottom: '2em',
                    flex: 1,
                    maxWidth: '145px',
                    minWidth: '145px',
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
                </HoverStyle>
              );
            }
          )}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
