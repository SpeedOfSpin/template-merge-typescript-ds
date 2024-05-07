import { Button } from 'react-aria-components';
import styled, { css } from 'styled-components';
import { theme } from './AppTheme';

export const WhiteButton = css`
  border: 1px solid ${theme.palette.blue.c_500};
  background-color: white;
  color: ${theme.palette.blue.c_500};
  padding: 0.4375rem 1.9375rem;

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.blue.c_50};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.blue.c_100};
  }
`;
export const BlackButton = css`
  background-color: ${theme.palette.default.c_950};
  color: ${theme.palette.default.text};

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.default.c_800};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.default.c_700};
  }
`;

export const BlueButton = css`
  background-color: ${theme.palette.blue.c_500};
  color: ${theme.palette.blue.text};

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.blue.c_600};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.blue.c_700};
  }
`;

export const GreenButton = css`
  background-color: ${theme.palette.green.c_500};
  color: ${theme.palette.green.text};

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.green.c_600};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.green.c_700};
  }
`;

export const RedButton = css`
  background-color: ${theme.palette.red.c_500};
  color: ${theme.palette.red.text};

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.red.c_600};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.red.c_700};
  }
`;

export const ClearButton = css`
  background-color: ${theme.palette.red.c_500};
  color: ${theme.palette.red.text};
  min-height: 0;
  min-width: 0;
  padding: 0;

  &:disabled {
    background-color: ${theme.palette.disabled.c_600};
    color: ${theme.palette.disabled.text};
  }

  &:hover:not([disabled]) {
    background-color: ${theme.palette.red.c_600};
  }

  &:active:not([disabled]) {
    background-color: ${theme.palette.red.c_700};
  }
`;
