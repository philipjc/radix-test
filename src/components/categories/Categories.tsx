import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from '../../app/hooks';
import { useAppSelector } from '../../app/hooks';
import { useMeals } from '../../features/general/hooks/useMeals';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';

import sharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled } = sharedStyled;

const HoverStyle = styled.div`
  &:hover {
    opacity: 0.6 !important;
    color: #444;
  }

  margin-bottom: 2em;
  flex: 1;
  cursor: pointer;
  transition: ease-out 0.8s;
`;

export function Categories() {
  const dispatch = useAppDispatch();
  const { inView } = useAppSelector(selectHeroObserver);

  const { categories, current: selectedCategory, AChangeCategory } = useCategory();

  const tileWidthStyles = inView
    ? { maxWidth: '145px', minWidth: '145px' }
    : { maxWidth: '75px', minWidth: '75px' };

  const {
    food: { fetchMeals },
  } = useMeals();

  return (
    <DarkerDMSectionStyled
      className={`section is-10 pt-0 pb-2`}
      style={inView ? {} : { position: 'fixed', top: 0, zIndex: 1, backgroundColor: 'transparent' }}
    >
      <div className="column is-10 ml-auto mr-auto pb-0">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
          {categories.map((category: any, idx: number) => {
            const { text, icon } = category;
            return (
              <HoverStyle
                key={`category-${idx}`}
                className="card mr-2 ml-2 category-card"
                onClick={() => {
                  dispatch(AChangeCategory(category));
                  fetchMeals(text);
                }}
                style={{
                  opacity: inView && selectedCategory.text !== text ? '.4' : 1,
                  ...tileWidthStyles,
                }}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <FontAwesomeIcon icon={icon} style={{ fontSize: '2.2em' }} />
                    </div>
                  </div>

                  {inView && (
                    <div className="content">
                      <p className="has-text-left"> {text}</p>
                    </div>
                  )}
                </div>
              </HoverStyle>
            );
          })}
        </div>
      </div>
    </DarkerDMSectionStyled>
  );
}
