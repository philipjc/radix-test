import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useMeals } from '../../features/general/hooks/useMeals';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';
import { iCategoryCard } from '../../features/general/state/interfaces/index.js';
import { HoverStyle } from './hoverCard';

const CategoryCard = ({ category, id }: iCategoryCard): ReactElement => {
  const dispatch = useAppDispatch();
  const { AChangeCategory, current: selectedCategory, ARemoveCategory } = useCategory();
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
        opacity: selectedCategory && selectedCategory.text === text ? 1 : 0.4,
        fontWeight: selectedCategory && selectedCategory.text === text ? 'bold' : 200,
        ...tileWidthStyles,
        margin: '0 auto',
        marginBottom: '1em',
      }}
    >
      <div className="card-content" style={{ position: 'relative' }}>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="category-bin p-2"
          onClick={e => {
            e.stopPropagation();
            return dispatch(ARemoveCategory(category.id));
          }}
        />
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
