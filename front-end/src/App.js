import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { Home, CreatePost } from './pages';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path='/create-post' component={CreatePost} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
