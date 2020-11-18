import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
