import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const MainContainer = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;
