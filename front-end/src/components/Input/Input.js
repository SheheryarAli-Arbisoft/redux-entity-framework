import React from 'react';
import { StyledInput } from './styled';
import { propTypes, defaultProps } from './props';

export const Input = ({ label, name, ...rest }) => {
  return <StyledInput label={label} name={name} {...rest} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
