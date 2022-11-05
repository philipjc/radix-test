import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks';
import './App.css';

import { selectDarkMode } from '../features/general/state/generalSlice';
import { MainNavigation } from '../components/navigation/MainNavigation';
import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch';
import { MainHero } from '../components/main-hero/MainHero';
import { MealsList } from '../components/meals-list/MealsList';

import darkTheme from '../themes/dark-theme';
import regularTheme from '../themes/regular-theme';

function App(): ReactElement {
  const isDarkMode = useAppSelector(selectDarkMode);

  const currentTheme = isDarkMode ? darkTheme : regularTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <DarkModeSwitch />
        <MainNavigation />
        <MainHero />
        <MealsList />
      </div>
    </ThemeProvider>
  );
}

export default App;
