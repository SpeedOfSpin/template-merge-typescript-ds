import styled from 'styled-components';
import { theme } from './AppTheme';
import { H4 } from '../components/Labels/Headers';

export const AccountFormLogo = styled.div`
  display: block;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  flex: 1;
  margin-bottom: 3rem;
  max-height: 7.375rem;
  min-height: 7.375rem;
  max-width: 11.75rem;
`;

export const AccountFormError = styled(H4)`
  background-color: ${theme.palette.error.c_500};
  color: ${theme.palette.error.text};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`;
