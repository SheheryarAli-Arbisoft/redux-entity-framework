import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const GridItem = ({ children, ...rest }) => {
  return (
    <StyledContainer item {...rest}>
      {children}
    </StyledContainer>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;
