import React, { CSSProperties, forwardRef, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  space,
  flexbox,
  border,
  layout,
  typography,
  color,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
} from '@techstack/styled-system';
import { motion, MotionProps } from 'framer-motion';

const Container = styled(motion.div)<Props>`
  display: flex;
  ${space}
  ${flexbox}
    ${border}
    ${layout}
    ${typography}
    ${color}
`;

interface Props extends SpaceProps, FlexboxProps, BorderProps, LayoutProps, TypographyProps, Partial<MotionProps> {
  id?: string;
  showIf?: boolean | undefined | null;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  color?: string;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>; // Ensure this is part of your interface
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}
export const Flex = forwardRef((props: PropsWithChildren<Props>, ref: any) => {
  const { showIf = true, children, onClick, onMouseEnter, onMouseLeave, ...rest } = props;
  if (!showIf) return null;
  return (
    <Container {...rest} ref={ref} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Container>
  );
});
Flex.displayName = 'Flex';
