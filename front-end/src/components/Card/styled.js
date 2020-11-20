import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const StyledWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
