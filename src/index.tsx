import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './app/App';
import reportWebVitals from './reportWebVitals';

import 'bulma/css/bulma.min.css';
import './index.css';

import regularTheme from './themes/regular-theme';
import darkTheme from './themes/dark-theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={{ dark: { ...darkTheme }, regular: { ...regularTheme } }}>
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
