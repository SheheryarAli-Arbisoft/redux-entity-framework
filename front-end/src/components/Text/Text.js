import React from 'react';
import { StyledText } from './styled';
import { propTypes, defaultProps } from './props';

export const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
