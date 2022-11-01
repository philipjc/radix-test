import React from 'react';
import './App.css';

import { MainNavigation } from '../components/navigation/MainNavigation';
import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch';

function App() {
  return (
    <div className="App">
      <DarkModeSwitch />
      <MainNavigation />
    </div>
  );
}

export default App;
