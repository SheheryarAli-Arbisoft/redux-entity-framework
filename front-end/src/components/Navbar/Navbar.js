import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/nodes/authentication/actions';
import { getAuthData } from '../../redux/nodes/authentication/selectors';
import { StyledNavbar, StyledWrapper, StyledLink } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Navbar = ({ ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(getAuthData);

  return (
    <StyledNavbar {...rest}>
      <StyledWrapper {...rest}>
        <StyledLink to='/' fullWidth>
          <Text variant='h6'>Blog App</Text>
        </StyledLink>
        {isAuthenticated ? (
          <>
            <Button color='inherit' onClick={() => dispatch(logout())}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <StyledLink to='/register'>
              <Button color='inherit'>Register</Button>
            </StyledLink>
            <StyledLink to='/login'>
              <Button color='inherit'>Login</Button>
            </StyledLink>
          </>
        )}
      </StyledWrapper>
    </StyledNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
