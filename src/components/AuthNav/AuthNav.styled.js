import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid black;
  }
`;
export const AuthNavBox = styled.div`
  display: flex;
`;
