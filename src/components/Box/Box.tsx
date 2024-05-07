import React, { CSSProperties, forwardRef, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  space,
  border,
  layout,
  typography,
  color,
  SpaceProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
} from '@techstack/styled-system';
import { motion, MotionProps } from 'framer-motion';

const Container = styled(motion.div)`
  display: block;
  ${space}
  ${border}
    ${layout}
    ${border}
    ${typography}
    ${color}
`;

interface Props extends SpaceProps, BorderProps, LayoutProps, TypographyProps, Partial<MotionProps> {
  /**
   * The ID of the component.
   */
  id?: string;

  /**
   * A boolean value that determines whether the component is shown or hidden.
   */
  showIf?: boolean | undefined | null;

  /**
   * The inline styles for the component.
   */
  style?: CSSProperties | undefined;

  /**
   * The color of the component.
   */
  color?: string;

  /**
   * The background color of the component.
   */
  backgroundColor?: string;

  /**
   * The CSS class names for the component.
   */
  className?: string | undefined;

  /**
   * The title of the component.
   */
  title?: string;

  /**
   * The event handler for the click event.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * The event handler for the mouse enter event.
   */
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;

  /**
   * The event handler for the mouse leave event.
   */
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;

  /**
   * The HTML element type of the component.
   */
  as?: keyof JSX.IntrinsicElements;
}
export const Box = forwardRef<HTMLDivElement, PropsWithChildren<Props>>((props, ref) => {
  const { showIf = true, as, children, onClick, onMouseEnter, onMouseLeave, ...rest } = props;
  if (!showIf) return null;

  return (
    <Container {...rest} as={as} ref={ref} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Container>
  );
});

Box.displayName = 'Box';
