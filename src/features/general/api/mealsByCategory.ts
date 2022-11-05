import { createAsyncThunk } from '@reduxjs/toolkit';

export interface iMeal {
  strMeal: string;
  idMeal: string;
  strMealThumb: string;
}

export interface iCategoryMealList {
  fetching: boolean;
  meals: Array<iMeal>;
}

function fetchMealByCategory(type: string): Promise<iCategoryMealList> {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`;

  return new Promise<iCategoryMealList>(resolve => {
    setTimeout(() => {
      fetch(url, {
        method: 'GET',
        referrerPolicy: 'no-referrer',
      }).then(response => resolve(response.json()));
    }, 3000);
  });
}

export const getMealByCategoryAsync = createAsyncThunk(
  'general/fetchMealByCategory',
  async (type: string): Promise<iCategoryMealList> => {
    try {
      return await fetchMealByCategory(type);
    } catch (e) {
      throw new Error('Failed get meal by category');
    }
  }
);
