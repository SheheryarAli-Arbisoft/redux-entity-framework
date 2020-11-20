import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { StyledNavbar, StyledWrapper } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Navbar = ({ ...rest }) => {
  return (
    <StyledNavbar {...rest}>
      <StyledWrapper {...rest}>
        <Text variant='h6' style={{ flexGrow: 1 }}>
          Blog App
        </Text>
        <Link
          to='/register'
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Button color='inherit'>Register</Button>
        </Link>
        <Button color='inherit'>Login</Button>
        <Button color='inherit'>Logout</Button>
      </StyledWrapper>
    </StyledNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
