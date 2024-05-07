import styled from 'styled-components';
import { theme } from './AppTheme';

export const AccountLayoutContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const AccountScrollableContainer = styled.section`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const AccountImage = styled.section`
  display: none;

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    display: block;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
  }
`;

export const AccountContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
