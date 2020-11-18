import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const CenteredContainer = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

CenteredContainer.propTypes = propTypes;
CenteredContainer.defaultProps = defaultProps;
