import React from 'react';
import { StyledButton } from './styled';
import { propTypes, defaultProps } from './props';

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
