import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks';
import './App.css';

import { selectDarkMode } from '../features/general/state/generalSlice';
import { MainNavigation } from '../components/navigation/MainNavigation';
import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch';
import { MainHero } from '../components/main-hero/MainHero';
import { MealsList } from '../components/meals-list/MealsList';
import { MealRecipe } from './pages/MealRecipe';

import darkTheme from '../themes/dark-theme';
import regularTheme from '../themes/regular-theme';

function App(): ReactElement {
  const isDarkMode = useAppSelector(selectDarkMode);

  const currentTheme = isDarkMode ? darkTheme : regularTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <DarkModeSwitch />
        <BrowserRouter>
          <MainNavigation />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainHero />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
