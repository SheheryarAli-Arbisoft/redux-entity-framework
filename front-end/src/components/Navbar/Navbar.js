import React from 'react';
import { Button } from '@material-ui/core';
import { StyledNavbar, StyledWrapper, StyledLink } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Navbar = ({ ...rest }) => {
  return (
    <StyledNavbar {...rest}>
      <StyledWrapper {...rest}>
        <Text variant='h6' style={{ flexGrow: 1 }}>
          <StyledLink to='/'>Blog App</StyledLink>
        </Text>

        <StyledLink to='/register'>
          <Button color='inherit'>Register</Button>
        </StyledLink>

        <StyledLink to='/login'>
          <Button color='inherit'>Login</Button>
        </StyledLink>

        <Button color='inherit'>Logout</Button>
      </StyledWrapper>
    </StyledNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
