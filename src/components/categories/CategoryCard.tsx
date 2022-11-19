import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { iCategoryModel } from '../../features/general/state/generalStateModel';
import { useMeals } from '../../features/general/hooks/useMeals';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';

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

interface iCategoryCard {
  category: iCategoryModel;
  id: number;
}

const CategoryCard = ({ category, id }: iCategoryCard): ReactElement => {
  const dispatch = useAppDispatch();
  const { AChangeCategory, current: selectedCategory } = useCategory();
  const { inView } = useAppSelector(selectHeroObserver);

  const { text, icon } = category;

  const {
    food: { fetchMeals },
  } = useMeals();

  const tileWidthStyles = inView ? { maxWidth: '125px', minWidth: '125px' } : {};

  return (
    <HoverStyle
      key={`category-${id}`}
      className="card mr-1 ml-1 category-card"
      onClick={e => {
        e.preventDefault();
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
};

export default CategoryCard;
