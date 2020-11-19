import React from 'react';
import { StyledInput } from './styled';
import { propTypes, defaultProps } from './props';

export const Input = ({ name, ...rest }) => {
  return <StyledInput label={name} {...rest} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
