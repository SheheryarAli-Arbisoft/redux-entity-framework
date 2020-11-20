import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getData } from '../../redux/nodes/authentication/selectors';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isAuthenticated } = useSelector(getData);

  return (
    <Route
      {...rest}
      render={props =>
        !isLoading && !isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};
