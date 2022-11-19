import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './hooks';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch';
import { MainHero } from '../components/main-hero/MainHero';
import { MealsList } from '../components/meals-list/MealsList';
import { MealRecipe } from './pages/meal-recipe/MealRecipe';
import { Categories } from '../components/categories/Categories';

import darkTheme from '../themes/dark-theme';
import regularTheme from '../themes/regular-theme';
import AppStyles from './AppStyled';
import { selectDarkMode } from '../features/general/state/accessors';
import { getMealCategoriesAsync } from '../features/general/api/mealCategories';

const { DMAppBackground } = AppStyles;

function App(): ReactElement {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectDarkMode);

  const currentTheme = isDarkMode ? darkTheme : regularTheme;

  useEffect(() => {
    /* eslint-disable */
    dispatch(getMealCategoriesAsync());
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <DMAppBackground className="App">
        <DarkModeSwitch />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainHero />
                  <Categories />
                  <MealsList />
                </>
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <>
                  <MealRecipe />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </DMAppBackground>
    </ThemeProvider>
  );
}

export default App;
