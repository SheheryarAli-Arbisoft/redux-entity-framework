import React from 'react';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const FormWrapper = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

FormWrapper.propTypes = propTypes;
FormWrapper.defaultProps = defaultProps;
