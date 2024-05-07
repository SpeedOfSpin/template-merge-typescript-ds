import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import React, { CSSProperties, PropsWithChildren } from 'react';
import styled, { Interpolation } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from '@techstack/styled-system';
import { Label } from 'react-aria-components';
import { theme } from '../../Styles/AppTheme';
import { CopyToClipboardButton } from '../CopyToClipboardButton';
import { isEmptyOrWhitespace, isNullOrUndefined } from '../../Utils';
const spaceProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
];
interface StyledLabelTextProps extends SpaceProps, LayoutProps, TypographyProps {
  color: string;
  pointer?: boolean;
  children?: React.ReactNode;
  ref?: React.Ref<any>;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties | undefined;
  className?: string;
  htmlFor?: string;
  childrenAs?: keyof JSX.IntrinsicElements;
  css?: Interpolation<object>;
  textContent?: string;
}
const StyledLabel = styled(Label).withConfig({
  shouldForwardProp: (prop) => !spaceProps.includes(prop) && !['pointer', 'css', 'color'].includes(prop),
})<StyledLabelTextProps>`
  ${theme.defaultStyle};
  ${space};
  ${layout};
  ${typography};
  /*  Theme properties*/
  color: ${(p) => p.color ?? theme.palette.field.text};
  cursor: ${(p) => (p.pointer ? 'pointer' : 'default')};
  /*End theme properties*/
  /* Resets */
  transition: 0.25s ease all;
  display: block;
  &&& {
    ${(p) => p.css}//Merge in any additional styles
  }
`;

/**
 * Text interface.
 */
export interface TextProps extends SpaceProps, LayoutProps {
  /**
   * @property {string} className - Optional. Specifies the CSS class of the label.
   */
  className?: string;
  /**
   * @property {CSSProperties | undefined} style - Optional. Specifies the CSS styles of the label.
   */
  style?: CSSProperties | undefined;
  /**
   * @property {themeColourOptions} color - Optional. Specifies the color of the label.
   */
  color?: string;
  /**
   * @property {string} htmlFor - Optional. Specifies the 'for' attribute of the label.
   */
  htmlFor?: string;
  /**
   * @property {React.Ref<HTMLLabelElement>} ref - Optional. Specifies the ref of the label.
   */
  ref?: React.Ref<HTMLLabelElement>;
  /**
   * @property {boolean} pointer - Optional. If true, the cursor style of the label is set to 'pointer'.
   */
  pointer?: boolean;
  /**
   * @property {keyof JSX.IntrinsicElements | undefined} as - Optional. Specifies the type of the HTML element that should be rendered. If not provided, a 'label' element will be rendered by default.
   */
  /**
   * @property {keyof JSX.IntrinsicElements | undefined} as - Optional. Specifies the type of the HTML element that should be rendered. If not provided, a 'label' element will be rendered by default.
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * @property {Interpolation<object>} css - Optional. Specifies additional CSS styles that should be applied to the label. This is a function that takes an object and returns a string of CSS.
   */
  css?: Interpolation<object>;

  /**
   * @property {React.ReactNode} children - Optional. Specifies the child elements of the label. This can be any valid React node (e.g. a string, a number, a React element, or an array of these types).
   */
  children?: React.ReactNode;
  /**
   * @property {string} ariaLabel - Optional. Specifies the 'aria-label' attribute of the label. This is used to define a string that labels the current element in cases where a text label is not visible on the screen. If this property is not provided, the 'aria-label' attribute will not be set on the element.
   */
  ariaLabel?: string;
  /**
   * @property {boolean} showCopyToClipBoard - Optional. Show the copy to clipboard button
   */
  showCopyToClipBoard?: boolean;
}

export const Text: React.FC<PropsWithChildren<TextProps>> = observer((props: TextProps) => {
  const ref = React.useRef(null);
  const { showCopyToClipBoard, ...rest } = props;
  // #region Code Behind
  const getClassNames = () => {
    return clsx({
      [props.className!]: !isEmptyOrWhitespace(props.className as string),
    });
  };
  const getStyles = (): CSSProperties | undefined => {
    return !isNullOrUndefined(props.style) ? props.style : undefined;
  };
  // #endregion Code Behind

  const textContent = React.Children.toArray(props.children)
    .filter((child) => typeof child === 'string' || typeof child === 'number')
    .join('');

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledLabel
        ref={props.ref}
        color={props.color as string}
        css={props.css}
        pointer={props.pointer}
        style={getStyles()}
        aria-label={props.ariaLabel}
        className={getClassNames()}
        htmlFor={props.htmlFor}
        {...rest}
      >
        {props.children}
      </StyledLabel>
      {showCopyToClipBoard && (
        <CopyToClipboardButton text={textContent} style={{ transform: 'translateY(5px)', paddingLeft: '5px' }} />
      )}
    </div>
  );
});

Text.defaultProps = {};
