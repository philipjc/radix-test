import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { useMeals } from '../../features/general/hooks/useMeals';
import { iCategoryCard } from '../../features/general/state/interfaces/index.js';
import { selectHeroObserver } from '../../features/page-observer/accessors';
import { HoverAddCard, HoverSpan, HoverStyle } from './hoverCard';

const CategoryCard = ({ category, id }: iCategoryCard): ReactElement => {
  const [showAvailableCategories, changeAvailableVisibility] = useState(false);
  const dispatch = useAppDispatch();
  const {
    AChangeCategory,
    current: selectedCategory,
    ARemoveCategory,
    AAddCategory,
    extraCategories,
  } = useCategory();
  const { inView } = useAppSelector(selectHeroObserver);

  const { text, icon, isVisible } = category;

  const {
    food: { fetchMeals },
  } = useMeals();

  const tileWidthStyles = inView ? { maxWidth: '125px', minWidth: '125px' } : {};

  function CardCategoryList() {
    return (
      <div
        className="card mr-1 ml-1 column p-1 is-flex is-flex-direction-column is-justify-content-space-evenly"
        style={{
          height: inView ? '132px' : '84px',
          maxWidth: inView ? '125px' : '86px',
          minWidth: inView ? '125px' : '86px',
          position: 'relative',
        }}
      >
        <FontAwesomeIcon
          onClick={e => {
            e.stopPropagation();
            changeAvailableVisibility(!showAvailableCategories);
          }}
          className="p-1"
          icon={faPlus}
          style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
        ></FontAwesomeIcon>
        {extraCategories.map((ec, index) => (
          <HoverSpan
            onClick={e => {
              e.stopPropagation();
              dispatch(AAddCategory(ec.id));
              changeAvailableVisibility(!showAvailableCategories);
            }}
            key={`${text}-${index}`}
            className="is-flex"
          >
            {ec.text}
          </HoverSpan>
        ))}
      </div>
    );
  }

  const AlternateCard = () =>
    showAvailableCategories ? (
      CardCategoryList()
    ) : (
      <HoverAddCard
        className="card mr-1 ml-1"
        style={{
          height: inView ? '132px' : '84px',
          maxWidth: inView ? '125px' : '86px',
          minWidth: inView ? '125px' : '86px',
          opacity: '.3',
        }}
        onClick={e => {
          e.stopPropagation();
          changeAvailableVisibility(!showAvailableCategories);
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </HoverAddCard>
    );

  return !isVisible ? (
    AlternateCard()
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
