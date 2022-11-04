import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks';
import './App.css';

import { selectDarkMode } from '../features/general/generalSlice';
import { MainNavigation } from '../components/navigation/MainNavigation';
import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch';
import { MainHero } from '../components/main-hero/MainHero';

import darkTheme from '../themes/dark-theme';
import regularTheme from '../themes/regular-theme';

function App() {
  const isDarkMode = useAppSelector(selectDarkMode);

  const currentTheme = isDarkMode ? darkTheme : regularTheme;

  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <DarkModeSwitch />
        <MainNavigation />
        <MainHero />
      </div>
    </ThemeProvider>
  );
}

export default App;
