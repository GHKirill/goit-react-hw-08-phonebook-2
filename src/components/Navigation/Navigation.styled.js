import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &.active {
    border-bottom: 2px solid black;
  }
`;
