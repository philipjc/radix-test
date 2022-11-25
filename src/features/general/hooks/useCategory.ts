import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../app/hooks';
import { selectUserCategoriesState } from '../state/accessors';
import { addCategory, changeCurrentCategory, removeCategory } from '../state/actions';
import { iCategoryModel } from '../state/generalStateModel';
import { iCurrentCategory } from '../state/interfaces/index.js';

interface iUseCategory {
  extraCategories: Array<iCategoryModel>;
  categories: Array<iCategoryModel>;
  current: iCurrentCategory | null;
  AChangeCategory: ActionCreatorWithPayload<iCurrentCategory>;
  ARemoveCategory: ActionCreatorWithPayload<number>;
  AAddCategory: ActionCreatorWithPayload<number>;
}

export function useCategory(): iUseCategory {
  const { categories, current, extraCategories } = useAppSelector(selectUserCategoriesState);

  return {
    extraCategories,
    categories,
    current,
    AChangeCategory: changeCurrentCategory,
    ARemoveCategory: removeCategory,
    AAddCategory: addCategory,
  };
}
