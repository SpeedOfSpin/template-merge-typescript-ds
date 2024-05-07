import React, { forwardRef } from 'react';
import { TextProps, Text } from './Text';
import { theme } from '../../Styles/AppTheme';

export const H1 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h1" {...props} css={theme.styles.h1} ref={ref} />
));
export const H2 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h2" {...props} css={theme.styles.h2} ref={ref} />
));
export const H3 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h3" {...props} css={theme.styles.h3} ref={ref} />
));
export const H4 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h4" {...props} css={theme.styles.h4} ref={ref} />
));
export const H5 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h5" {...props} css={theme.styles.h5} ref={ref} />
));
export const H6 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h6" {...props} css={theme.styles.h6} ref={ref} />
));
export const H7 = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="h6" {...props} css={theme.styles.h7} ref={ref} />
));
export const P = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="p" {...props} css={theme.styles.p} ref={ref} />
));
export const SPAN = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="span" {...props} css={theme.styles.span} ref={ref} />
));
export const FieldLabel = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text {...props} css={theme.styles.fieldLabel} ref={ref} />
));
export const PARAGRAPH = forwardRef((props: TextProps, ref: React.Ref<any>) => (
  <Text as="p" {...props} css={theme.styles.p} ref={ref} />
));

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';
H7.displayName = 'H7';
P.displayName = 'P';
SPAN.displayName = 'SPAN';
FieldLabel.displayName = 'FieldLabel';
PARAGRAPH.displayName = 'PARAGRAPH';
