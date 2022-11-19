import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';
import sharedStyled from '../../shared-styled/SharedStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iUseMeals } from '../../features/general/state/interfaces/index.js';
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

export function Categories(): ReactElement {
  const dispatch = useAppDispatch();
  const { AChangeCategory, current: selectedCategory } = useCategory();

  const { inView } = useAppSelector(selectHeroObserver);
  const { categories } = useCategory();

  const containerClasses = inView
    ? 'column is-10 ml-auto mr-auto pb-0'
    : 'column is-10 ml-auto mr-auto';

  const tileWidthStyles = inView ? { maxWidth: '125px', minWidth: '125px' } : {};

  const BlockStyles = !inView ? CategoryAnimation : DarkerDMSectionStyled;

  const {
    food: { fetchMeals },
  }: iUseMeals = useMeals();

  return (
    <BlockStyles
      inView={inView}
      className={inView ? `section is-10 pt-4 pb-5` : `section is-10 pt-0 pb-2 pl-0`}
    >
      <div className={containerClasses}>
        <div className={inView ? 'is-flex is-flex-wrap-wrap is-justify-content-space-evenly' : ''}>
          {categories.map((category: any, idx: number) => {
            const { text, icon } = category;
            return (
              <HoverStyle
                key={`category-${idx}`}
                className="card mr-1 ml-1 category-card"
                onClick={e => {
                  dispatch(AChangeCategory(category));
                  fetchMeals(text);
                }}
                style={{
                  opacity: selectedCategory.text !== text ? '.4' : 1,
                  ...tileWidthStyles,
                  margin: '0 auto',
                  marginBottom: '1em',
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
