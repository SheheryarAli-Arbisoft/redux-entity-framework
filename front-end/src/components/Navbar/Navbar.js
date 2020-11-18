import React from 'react';
import { StyledNavbar, StyledWrapper } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Navbar = ({ ...rest }) => {
  return (
    <StyledNavbar {...rest}>
      <StyledWrapper>
        <Text variant='h6'>Blog App</Text>
      </StyledWrapper>
    </StyledNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
