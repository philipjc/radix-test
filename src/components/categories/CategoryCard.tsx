import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useMeals } from '../../features/general/hooks/useMeals';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';
import { iCategoryCard } from '../../features/general/state/interfaces/index.js';
import { HoverStyle, HoverAddCard } from './hoverCard';

const CategoryCard = ({ category, id }: iCategoryCard): ReactElement => {
  const dispatch = useAppDispatch();
  const {
    AChangeCategory,
    current: selectedCategory,
    ARemoveCategory,
    AAddCategory,
  } = useCategory();
  const { inView } = useAppSelector(selectHeroObserver);

  const { text, icon, isVisible } = category;

  const {
    food: { fetchMeals },
  } = useMeals();

  const tileWidthStyles = inView ? { maxWidth: '125px', minWidth: '125px' } : {};

  return !isVisible ? (
    <HoverAddCard
      className="card mr-1 ml-1"
      style={{
        height: inView ? '132px' : '84px',
        maxWidth: inView ? '125px' : '86px',
        minWidth: inView ? '125px' : '86px',
        opacity: '.3',
      }}
      onClick={() => dispatch(AAddCategory(category.id))}
    >
      <FontAwesomeIcon icon={faPlus} />
    </HoverAddCard>
  ) : (
    <HoverStyle
      key={`category-${id}`}
      className="card mr-1 ml-1 category-card"
      onClick={e => {
        e.preventDefault();
        dispatch(AChangeCategory(category));
        fetchMeals(text).then(res => console.log(res));
      }}
      style={{
        opacity: selectedCategory && selectedCategory.text === text ? 1 : 0.5,
        fontWeight: selectedCategory && selectedCategory.text === text ? 'bold' : 200,
        ...tileWidthStyles,
        margin: '0 auto',
        marginBottom: '1em',
      }}
    >
      <div className="card-content" style={{ position: 'relative' }}>
        <FontAwesomeIcon
          icon={faTrashCan}
          className={inView ? `category-bin p-2` : `category-bin p-0`}
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
