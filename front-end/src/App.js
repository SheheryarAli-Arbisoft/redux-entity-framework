import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { Home } from './pages';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Home />
    </Provider>
  );
};

export default App;
