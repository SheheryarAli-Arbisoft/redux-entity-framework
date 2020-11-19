import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const LoadingIndicator = ({ color, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <CircularProgress color={color} />
    </StyledContainer>
  );
};

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;
