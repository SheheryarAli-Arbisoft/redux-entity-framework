import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled(AppBar)`
  z-index: 1;
`;

export const StyledWrapper = styled(Toolbar)`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  ${({ fullWidth }) => fullWidth && `flex-grow: 1;`}
  color: inherit;
  text-decoration: none;
`;
