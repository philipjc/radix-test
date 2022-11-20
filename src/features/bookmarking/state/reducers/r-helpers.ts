import produce from 'immer';
import { iLikedMeal } from '../bookmarkingSliceModel';

export const removeItemById = (array: Array<iLikedMeal>, payload: iLikedMeal) =>
  produce(array, draft => {
    const index = draft.findIndex(item => item.id === payload.id);
    if (index !== -1) draft.splice(index, 1);
  });

export const addItemToArray = (array: Array<iLikedMeal>, payload: iLikedMeal) =>
  produce(array, draft => {
    draft.push(payload);
  });
