import { selectUserCategoriesState } from '../state/accessors';
import { useAppSelector } from '../../../app/hooks';
import { changeCurrentCategory, removeCategory } from '../state/actions';
import { iCurrentCategory } from '../state/interfaces/index.js';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface iUseCategory {
  categories: {}[];
  current: iCurrentCategory | null;
  AChangeCategory: ActionCreatorWithPayload<iCurrentCategory>;
  ARemoveCategory: ActionCreatorWithPayload<number>;
}

export function useCategory(): iUseCategory {
  const { categories, current } = useAppSelector(selectUserCategoriesState);

  return {
    categories,
    current,
    AChangeCategory: changeCurrentCategory,
    ARemoveCategory: removeCategory,
  };
}
