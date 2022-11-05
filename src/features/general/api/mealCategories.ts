import { createAsyncThunk } from '@reduxjs/toolkit';

export interface iCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface iMealCategoriesList {
  fetching: boolean;
  categories: Array<iCategory>;
}

function fetchMealCategories(): Promise<iMealCategoriesList> {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  return new Promise<iMealCategoriesList>(resolve => {
    setTimeout(() => {
      fetch(url, {
        method: 'GET',
        referrerPolicy: 'no-referrer',
      }).then(response => resolve(response.json()));
    }, 3000);
  });
}

export const getMealCategoriesAsync = createAsyncThunk(
  'general/fetchMealCategories',
  async (): Promise<iMealCategoriesList> => {
    try {
      return await fetchMealCategories();
    } catch (e) {
      throw new Error('Failed fetchMealCategories');
    }
  }
);
