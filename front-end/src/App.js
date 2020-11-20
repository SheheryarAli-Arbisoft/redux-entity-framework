import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { Home, CreatePost, Register } from './pages';
import { store } from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path='/create-post' component={CreatePost} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </StylesProvider>
    </Provider>
  );
};

export default App;
