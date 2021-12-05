import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { theme } from './theme';

import { Home } from './containers/Home/Home';
import { Writer } from './containers/Writer/Writer';
import { createStore } from 'redux';

import { noteReducer } from './reducers/noteReducer';

const store = createStore(noteReducer);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writer/new" element={<Writer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
