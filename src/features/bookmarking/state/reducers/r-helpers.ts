import produce from 'immer';
import { iLikedMeal } from '../bookmarkingSliceModel';

export function isRecipeBookmarked(array: Array<iLikedMeal>, payload: iLikedMeal) {
  return array.findIndex(item => item.id === payload.id);
}

export const removeItemById = (array: Array<iLikedMeal>, payload: iLikedMeal) =>
  produce(array, draft => {
    const index = isRecipeBookmarked(array, payload);
    if (index !== -1) draft.splice(index, 1);
  });

export const addItemToArray = (array: Array<iLikedMeal>, payload: iLikedMeal) =>
  produce(array, draft => {
    draft.push(payload);
  });
