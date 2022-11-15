import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMeals } from '../../features/general/hooks/useMeals';
import { useCategory } from '../../features/general/hooks/useCategory';
import { useAppDispatch } from '../../app/hooks';

import sharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled } = sharedStyled;

const HoverStyle = styled.div`
  &:hover {
    opacity: 0.6 !important;
    color: #444;
  }
`;

export function Categories() {
  const dispatch = useAppDispatch();
  const { categories, current, AChangeCategory } = useCategory();

  const {
    food: { fetchMeals },
  } = useMeals();

  return (
    <DarkerDMSectionStyled className="section is-10 pt-0 pb-2">
      <div className="column is-10 ml-auto mr-auto pb-0">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
          {categories.map((cat: any, idx: number) => {
            return (
              <HoverStyle
                key={`category-${idx}`}
                className="card mr-2 ml-2 category-card"
                onClick={() => {
                  dispatch(AChangeCategory({ text: cat.text, id: cat.id }));
                  fetchMeals(cat.text);
                }}
                style={{
                  opacity: current.text !== cat.text ? '.4' : 1,
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
          })}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
