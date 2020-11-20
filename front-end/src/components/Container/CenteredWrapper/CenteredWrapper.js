import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const CenteredWrapper = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

CenteredWrapper.propTypes = propTypes;
CenteredWrapper.defaultProps = defaultProps;
