import { createAsyncThunk } from '@reduxjs/toolkit';

export interface iMeal {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface iMealCategoriesList {
  categories: Array<iMeal>;
}

function getMealCategories(): Promise<iMealCategoriesList> {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  return new Promise<iMealCategoriesList>(resolve => {
    fetch(url, {
      method: 'GET',
      referrerPolicy: 'no-referrer',
    }).then(response => resolve(response.json()));
  });
}

export const getMealCategoriesAsync = createAsyncThunk(
  'general/fetchCount',
  async (): Promise<iMealCategoriesList> => {
    try {
      return await getMealCategories();
    } catch (e) {
      console.log('Failed getMealCategories:', e);
      return new Promise<any>(resolve => resolve(e));
    }
  }
);
