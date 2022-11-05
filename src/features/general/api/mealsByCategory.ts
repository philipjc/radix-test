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

function fetchMealByCategory(type: string = 'Vegetarian'): Promise<iCategoryMealList> {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`;

  return new Promise<iCategoryMealList>(resolve => {
    setTimeout(() => {
      fetch(url, {
        method: 'GET',
        referrerPolicy: 'no-referrer',
      }).then(response => resolve(response.json()));
    }, 4000);
  });
}

export const getMealByCategoryAsync = createAsyncThunk(
  'general/fetchMealByCategory',
  async (type: string): Promise<iCategoryMealList> => {
    try {
      return await fetchMealByCategory(type);
    } catch (e) {
      console.log('Failed get meal by category:', e);
      return new Promise<any>(resolve => resolve(e));
    }
  }
);
