import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledText = styled(Typography)`
  font-family: inherit;
  ${({ bold }) => bold && `font-weight: bold;`};
  ${({ alignCenter }) =>
    alignCenter &&
    `display: flex; 
    align-items: 
    center; 
    gap: 5px;`}
  ${({ cursorPointer }) => cursorPointer && `cursor: pointer;`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: 20px;`};
`;
