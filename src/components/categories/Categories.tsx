import React, { ReactElement } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useCategory } from '../../features/general/hooks/useCategory';
import { selectHeroObserver } from '../../features/page-observer/accessors';
import CategoryCard from './CategoryCard';
import { CategoryAnimation } from './moveLeftAnimation';
import sharedStyled from '../../shared-styled/SharedStyled';
const { DarkerDMSectionStyled } = sharedStyled;

export function Categories(): ReactElement {
  const { inView } = useAppSelector(selectHeroObserver);
  const { categories } = useCategory();

  const containerClasses = inView
    ? 'column is-10 ml-auto mr-auto pb-0'
    : 'column is-10 ml-auto mr-auto';

  const BlockStyles = !inView ? CategoryAnimation : DarkerDMSectionStyled;

  return (
    <BlockStyles
      inView={inView}
      className={inView ? `section is-10 pt-3 pb-6` : `section is-10 pt-0 pb-2 pl-0`}
    >
      <div className={containerClasses}>
        <div className={inView ? 'is-flex is-flex-wrap-wrap is-justify-content-space-evenly' : ''}>
          {categories.map((category: any, idx: number) => {
            return <CategoryCard key={idx} category={category} id={idx} />;
          })}
        </div>
      </div>
    </BlockStyles>
  );
}
