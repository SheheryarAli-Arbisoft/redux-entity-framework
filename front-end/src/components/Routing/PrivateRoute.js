import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../../redux/nodes/authentication/selectors';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(getData);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
