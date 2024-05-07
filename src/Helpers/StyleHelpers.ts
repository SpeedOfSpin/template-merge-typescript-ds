import { theme } from '../Styles/AppTheme';
import { AccentColours, FontVariant, Sizes, themeShapeOptions, themeSizeOptions } from '../Styles/IShoothillTheme';

export const pxToRem = (value: number | string) => {
  const valueOnly = typeof value === 'string' ? parseFloat(value.replace('px', '')) : value;
  return `${valueOnly / 16}rem`;
};

//Util function to convert desktop version of AdobeXD AV value to REM
export const adobeXDToRem = (fontSize: number, letterSpacing: number): string => {
  return pxToRem((letterSpacing / 1000) * fontSize) + 'rem';
};
export const remToPx = (rem?: string): string => {
  if (rem) {
    const newRem = parseFloat(rem.replace('rem', ''));
    return newRem * parseFloat(getComputedStyle(document.documentElement).fontSize) + 'px';
  }
  return '16px';
};

export const getThemePaletteOption = (option?: any): AccentColours => {
  return (theme.palette as any)[option] || theme.palette.default;
};

export const getThemeColorOption = (option: any): string => {
  return (theme.palette.error as any)[option] || theme.palette.error.c_500;
};

export const getThemeSizeOption = (option: themeSizeOptions): string => {
  return theme.sizes[option as keyof Sizes] || theme.sizes.large;
};

export const getThemeShapeOption = (option: themeShapeOptions): string => {
  switch (option) {
    case 'round':
      return '100em';

    case 'square':
    default:
      return pxToRem(2);
  }
};

export const getThemeFontStyleOption = (option: any): FontVariant => {
  return (theme.styles as any)[option] || theme.styles.p;
};
