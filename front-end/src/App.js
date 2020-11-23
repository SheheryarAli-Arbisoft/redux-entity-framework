import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { Home, CreatePost, Register, Login } from './pages';
import { PrivateRoute } from './components/Routing/PrivateRoute';
import { store } from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/create-post' component={CreatePost} />
            <PrivateRoute exact path='/' component={Home} />
          </Switch>
        </Router>
      </StylesProvider>
    </Provider>
  );
};

export default App;
