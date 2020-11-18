import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const GridContainer = ({ children, ...rest }) => {
  return (
    <StyledContainer container {...rest}>
      {children}
    </StyledContainer>
  );
};

GridContainer.propTypes = propTypes;
GridContainer.defaultProps = defaultProps;
