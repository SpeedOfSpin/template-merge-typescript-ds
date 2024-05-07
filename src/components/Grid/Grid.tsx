import React, { CSSProperties, forwardRef, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  space,
  grid,
  border,
  layout,
  typography,
  color,
  SpaceProps,
  GridProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  flexbox,
} from '@techstack/styled-system';
import { motion, MotionProps } from 'framer-motion';

const Container = styled(motion.div)`
  display: grid;
  ${space}
  ${grid}
    ${border}
    ${layout}
    ${typography}
    ${color}
    ${flexbox}
`;
type AdjustedFlexBoxProps = Omit<FlexboxProps, 'flex' | 'flexDir' | 'flexGrow' | 'flexDirection'>;
interface Props
  extends SpaceProps,
    GridProps,
    BorderProps,
    LayoutProps,
    TypographyProps,
    AdjustedFlexBoxProps,
    Partial<MotionProps> {
  id?: string;
  showIf?: boolean | undefined | null;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}
export const Grid = forwardRef((props: PropsWithChildren<Props>, ref: any) => {
  const { showIf = true, children, onClick, onMouseEnter, onMouseLeave, ...rest } = props;
  if (!showIf) return null;
  return (
    <Container {...rest} ref={ref} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Container>
  );
});
Grid.displayName = 'Grid';
