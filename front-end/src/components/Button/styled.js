import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  ${({ marginBottom }) => marginBottom && `margin-bottom: 10px;`}
  ${({ marginTop }) => marginTop && `margin-top: 20px;`}
  ${({ displayNone }) => displayNone && `display: none;`}
`;
