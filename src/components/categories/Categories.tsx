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
  transition: all ease-in-out 0.5s;
`;

const CategoryAnimation: any = styled(DarkerDMSectionStyled)`
  position: fixed;
  top: 0;
  z-index: 1;
  padding-right: 0;
  background-color: transparent;

  animation-duration: 1.6s;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-direction: alternate;

  @keyframes fadeInOpacity {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`;

export function Categories() {
  const dispatch = useAppDispatch();
  const { inView } = useAppSelector(selectHeroObserver);

  const { categories, current: selectedCategory, AChangeCategory } = useCategory();

  const tileWidthStyles = inView ? { maxWidth: '145px', minWidth: '145px' } : {};

  const containerClasses = inView
    ? 'column is-10 ml-auto mr-auto pb-0'
    : 'column is-10 ml-auto mr-auto';

  const {
    food: { fetchMeals },
  } = useMeals();

  const BlockStyles = !inView ? CategoryAnimation : DarkerDMSectionStyled;

  return (
    <BlockStyles
      inView={inView}
      className={inView ? `section is-10 pt-0 pb-2` : `section is-10 pt-0 pb-2 pl-0`}
    >
      <div className={containerClasses}>
        <div className={inView ? 'is-flex is-flex-wrap-wrap is-justify-content-space-evenly' : ''}>
          {categories.map((category: any, idx: number) => {
            const { text, icon } = category;
            return (
              <HoverStyle
                key={`category-${idx}`}
                className="card mr-2 ml-2 category-card"
                onClick={e => {
                  dispatch(AChangeCategory(category));
                  fetchMeals(text);
                }}
                style={{
                  opacity: selectedCategory.text !== text ? '.4' : 1,
                  ...tileWidthStyles,
                  margin: '0 auto',
                  marginBottom: 30,
                }}
              >
                <div className="card-content">
                  <div className="media">
                    <div className="media-left is-flex is-justify-content-center">
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
    </BlockStyles>
  );
}
