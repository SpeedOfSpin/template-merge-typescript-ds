import { CSSProperties } from "react";

//export type themeColourOptions = keyof CommonColours | undefined;
//export type themePaletteOptions = keyof Palette | undefined;
export type themeSizeOptions = (keyof Sizes & string) | undefined;
//export type themeFontStyleOptions = keyof Styles | undefined;
export type themeShapeOptions = "round" | "square" | undefined;

/*export type CommonColours = {
    transparent: string;
    white: string;
    black: string;
    focus: string;
    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    error: string;
    success: string;
    green: string;
    purple: string;
    blue: string;
    darkPurple: string;
};*/

export type AccentColours = {
    c_50: string;
    c_100: string;
    c_200: string;
    c_300: string;
    c_400: string;
    c_500: string;
    c_600: string;
    c_700: string;
    c_800: string;
    c_900: string;
    c_950: string;
    /*lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;*/
    //contrastText: string;
    text: string;
};

/*
export type Styles = {
    h1: FontVariant;
    h2: FontVariant;
    h3: FontVariant;
    h4: FontVariant;
    h5: FontVariant;
    h6: FontVariant;
    h7: FontVariant;
    p: FontVariant;
    button: FontVariant;
    error: FontVariant;
    label: FontVariant;
    field: FontVariant;
    tableHeader: FontVariant;
    checkboxLabel: FontVariant;
    radioButtonLabel: FontVariant;
    headerOptionLabel: FontVariant;
};
*/

export type Sizes = {
    larger: string;
    large: string;
    medium: string;
    small: string;
};

export type FontVariant = {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    letterSpacing?: string;
    lineHeight?: string;
    textTransform?: string;
};

/*export type Palette = {
    common: CommonColours;

    default: AccentColours;
    primary: AccentColours;
    secondary: AccentColours;
    tertiary: AccentColours;
    quarternary: AccentColours;
    defaultTr: AccentColours;

    field: AccentColours;
    tableHeader: AccentColours;

    error: AccentColours;
    warning: AccentColours;
    info: AccentColours;
    success: AccentColours;
    disabled: AccentColours;
    hint: AccentColours;
    delete: AccentColours;
    purpleAccent: AccentColours;
};*/

export type Dates = {
    default: string;
    short: string;
    long: string;
};

/*export interface IShoothillTheme {
    breakpoints: string[];
    fontSizes: number[];
    // Spacing in pixels.
    space: number[];

    // Sizes. Keep numbers divisible by 2.
    sizes: Sizes;

    palette: Palette;

    // Fonts and Text.
    defaultFontStyle: FontVariant;
    styles: any;
    dates: Dates;
}*/
