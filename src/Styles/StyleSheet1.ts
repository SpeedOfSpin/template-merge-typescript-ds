import { AccentColours } from './IShoothillTheme';
import chroma from 'chroma-js';
import { css } from 'styled-components';
import { colorShades } from './ColorShades';

export type ColorVariants = number[] | readonly number[];
export type ColorTones = number[];

const defaultAlphaVariants = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100] as const;

export type DefaultAlphaVariants = typeof defaultAlphaVariants;
export interface Colors {
  [key: string]: string | Colors;
  [key: number]: string | Colors;
}
type AlphaVariant<C extends Colors, V extends ColorVariants> = `${Extract<keyof C, string>}-a${V[number]}`;

type AlphaVariants<C extends Colors, V extends ColorVariants> = {
  [K in AlphaVariant<C, V>]: string | Colors;
};
export const string = (n: unknown): n is Exclude<string, ''> => typeof n === 'string' && n !== '';
export const generateHexAlphaVariants = <C extends Colors, V extends ColorVariants>(
  colors: C,
  variants: V = defaultAlphaVariants as unknown as V
): C & AlphaVariants<C, V> => {
  const transform = (value: string, variant: number) =>
    `${value}${Math.round((variant / 100) * 255)
      .toString(16)
      .padStart(2, '0')}`;
  const alphaColors = Object.keys(colors).reduce((obj, key) => {
    variants.forEach((variant: number) => {
      const value = colors[key];
      const variantKey = `${key}-a${variant}` as AlphaVariant<C, V>;
      obj[variantKey] = string(value)
        ? transform(value, variant)
        : generateHexAlphaVariants<typeof value, V>(value, variants);
    });

    return obj;
  }, {} as AlphaVariants<C, V>);

  return { ...colors, ...alphaColors };
};

const defaultTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};
export const adobeXDToRem = (fontSize: number, letterSpacing: number): string => {
  return pxToRem((letterSpacing / 1000) * fontSize);
};

//Define your custom breakpoints here or accept the default values which are the standard common breakpoints
const customBreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const hexTints = (i: any, hex: string, percentage = 2) => {
  const hue = chroma(hex).get('hsl.h');
  const saturation = chroma(hex).get('hsl.s');
  const luminance = chroma(hex).get('hsl.l');
  const lighter = luminance + (percentage / 100) * (i + 1);
  return lighter <= 1 ? chroma(hue, saturation, lighter, 'hsl') : false;
};

function generateTintsForColor(baseColor: string): { [key: number]: string } {
  const tints: { [key: number]: string } = {};
  const step = 0.1; // Adjust this value to control the rate of change between tints

  for (let i = 50; i <= 950; i += 100) {
    if (i === 500) {
      tints[i] = baseColor;
    } else if (i < 500) {
      // Generate darker tints for values below 500
      const scale = (500 - i) / 450;
      tints[i] = chroma(baseColor)
        .darken(scale * step)
        .hex();
    } else {
      // Generate lighter tints for values above 500
      const scale = (i - 500) / 450;
      tints[i] = chroma(baseColor)
        .brighten(scale * step)
        .hex();
    }
  }

  // Adjustments for closer steps around 500 if necessary
  // This part is optional and can be modified or removed based on your needs
  tints[450] = chroma(baseColor)
    .darken(step * 0.5)
    .hex();
  tints[550] = chroma(baseColor)
    .brighten(step * 0.5)
    .hex();

  return tints;
}

const ThemeColours = (colour: string, text: string, scale = 0.5): AccentColours => {
  //const values = new Values(colour).all(20);
  //values.forEach((v) => console.log(v.hex));
  const a = generateTintsForColor(colour);
  const b = generateHexAlphaVariants({
    'blue-light': '#85d7ff',
  });
  const retval = {
    c_50: chroma(colour)
      .brighten(scale * 5)
      .hex(),
    c_100: chroma(colour)
      .brighten(scale * 4.5)
      .hex(),
    c_200: chroma(colour)
      .brighten(scale * 3.5)
      .hex(),
    c_300: chroma(colour)
      .brighten(scale * 2.5)
      .hex(),
    c_400: chroma(colour)
      .brighten(scale * 1.5)
      .hex(),
    c_500: chroma(colour).hex(),
    c_600: chroma(colour)
      .darken(scale * 1)
      .hex(),
    c_700: chroma(colour)
      .darken(scale * 2)
      .hex(),
    c_800: chroma(colour)
      .darken(scale * 3)
      .hex(),
    c_900: chroma(colour)
      .darken(scale * 4)
      .hex(),
    c_950: chroma(colour)
      .darken(scale * 4.5)
      .hex(),
    text: text,
  };
  /*if (chroma.contrast(retval.main, retval.text) < 4.5) {
        console.warn("Text may not be readable with this colour");
    }*/
  return retval;
};

type Breakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
export const screenBreakPoints: string[] = ['767px', '1280px', '1920px', '9999px'];
export const StyleSheet1 = {
  // Fonts and Text.
  defaultStyle: css`
    font-family: Roberto, Arial;
    color: black;
    font-size: ${pxToRem(16)};
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5;
    text-transform: none;
  `,
  // Breakpoints in pixels. If you use an array for any space, font size etc. It will make that value responsive, and it will MOBILE FIRST.
  // Meaning that mobile styling will be applied without the need for a media query.
  // First value is the minimum width for the breakpoint. Anything less that this will use the FIRST item in the array you specify.
  // Second value is the minimum width for the breakpoint. Anything less that this will use the SECOND item in the array you specify.
  // Third value is the minimum width for the breakpoint. Anything less that this will use the THIRD item in the array you specify.
  // Eg. <Heading fontSize={[8, 5, 1]}>Mobile</Heading> will use the 8th item in the array for mobile, 5th for tablet and 1st for desktop.
  breakpoints: screenBreakPoints,
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128, 256] as const,
  // Spacing in pixels.
  space: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const,

  // Sizes. Keep numbers divisible by 2.
  sizes: {
    larger: pxToRem(40),
    large: pxToRem(30),
    medium: pxToRem(26),
    small: pxToRem(20),
  },
  dates: {
    default: 'DD/MM/YYYY',
    short: 'DD/MM',
    long: 'MMMM Do, YYYY',
  },
  styles: {
    h1: css`
      font-size: ${pxToRem(30)};
      font-weight: 600;
      letter-spacing: ${adobeXDToRem(30, -15)};
      line-height: ${pxToRem(40)};
    `,
    h2: css`
      margin: 0;
      font-size: ${pxToRem(24)};
      font-weight: 600;
      letter-spacing: ${adobeXDToRem(24, -15)};
      line-height: ${pxToRem(30)};
    `,
    h3: css`
      font-size: ${pxToRem(18)};
      font-weight: 600;
      letter-spacing: 0rem;
      line-height: ${pxToRem(18)};
    `,
    h4: css`
      font-size: ${pxToRem(14)};
      font-weight: 600;
      letter-spacing: 0rem;
      line-height: ${pxToRem(14)};
    `,
    h5: css`
      font-size: ${pxToRem(12)};
      font-weight: 600;
      letter-spacing: 0rem;
      line-height: ${pxToRem(12)};
    `,
    h6: css`
      font-size: ${pxToRem(10)};
      letter-spacing: 0rem;
      line-height: ${pxToRem(10)};
      text-transform: uppercase;
    `,
    h7: css`
      font-size: ${pxToRem(10)};
      font-weight: 600;
      letter-spacing: 0rem;
      line-height: ${pxToRem(10)};
    `,
    p: css`
      font-size: ${pxToRem(14)};
      letter-spacing: 0rem;
      line-height: ${pxToRem(14)};
      font-weight: 400;
    `,
    span: css`
      font-size: ${pxToRem(14)};
      letter-spacing: 0rem;
      line-height: ${pxToRem(14)};
    `,
    header: css`
      font-size: ${pxToRem(16)};
      letter-spacing: 0rem;
      line-height: ${pxToRem(16)};
      font-weight: 600;
    `,
    table: css`
      .tableGroupHead {
        .tableHead {
          justify-self: flex-start;
          label {
            color: white;
          }
        }
      }
      .tableBody {
        .tableRow {
          .tableCell {
            padding: 4px 4px;
            border-bottom: 1px solid lightgray;
            color: black;
          }
        }
      }
      .tableFoot {
        .tableRow {
          .tableHead {
            color: white;
          }
        }
      }
      @media screen and (max-width: ${screenBreakPoints[0]}) {
        td::before {
          color: white;
        }
      }
    `,
    input: css`
      .input-container {
        border: 1px solid #ccc;
        border-radius: ${pxToRem(3)};
      }
      .input-field {
        font-size: ${pxToRem(14)};
        margin: 0;
        padding: 8px;
        border-radius: ${pxToRem(3)};
      }
    `,
    editSelect: css`
      .select__placeholder {
        font-size: ${pxToRem(14)};
      }
    `,
    button: css`
      font-size: ${pxToRem(14)};
      letter-spacing: ${pxToRem(0.3)};
      text-transform: none;
      line-height: ${pxToRem(30)};
      font-weight: 600;
      border-radius: ${pxToRem(3)};
      cursor: pointer;
      padding: 8px 30px;
      //Overrides
      &:hover {
      }
      &:active {
      }
    `,
    error: css`
      color: red;
      font-size: ${pxToRem(12)};
      letter-spacing: ${pxToRem(-0.15)};
    `,
    // Overrides for calendar.
    calendar: css`
      .react-date-picker__inputGroup__input {
        font-size: ${pxToRem(14)};
        letter-spacing: ${pxToRem(-0.15)};
      }
      .react-calendar__tile {
        border-radius: ${pxToRem(3)};
      }
    `,
    fieldLabel: css`
      font-size: ${pxToRem(14)};
      letter-spacing: ${pxToRem(-0.18)};
      color: black;
      text-transform: none;
      line-height: ${pxToRem(30)};
      font-weight: 700;
    `,
    label: css`
      font-size: ${pxToRem(14)};
      letter-spacing: ${pxToRem(-0.18)};
      font-weight: 600;
    `,
    tableHeader: css`
      font-size: ${pxToRem(14)};
      font-weight: 700;
      letter-spacing: ${pxToRem(-0.18)};
      line-height: 42px;
    `,
    checkboxLabel: css`
      font-size: ${pxToRem(12)};
      letter-spacing: ${pxToRem(0.36)};
    `,
    radioButtonLabel: css`
      font-size: ${pxToRem(14)};
      letter-spacing: ${pxToRem(0.36)};
    `,
    headerOptionLabel: css`
      font-size: ${pxToRem(12)};
      letter-spacing: ${pxToRem(0.6)};
      text-transform: uppercase;
    `,
  },
  palette: {
    // Use these for your controls - those that have a visual state - focused, hover, pressed etc.
    // Light defines the default state with main and dark being non-default states.

    // Light grey background with white text
    // disabled: { light: "#f3f2f1", main: "#f3f2f1", dark: "#f3f2f1", contrastText: "#a19f9d", text: "#a19f9d" },
    disabled: ThemeColours('#f3f2f1', '#a19f9d'),
    // Dark grey background with white text
    default: ThemeColours('#707070', '#fff'),
    // Mid blue background with white text
    primary: colorShades.blue,
    // Mid orange background with white text
    secondary: ThemeColours('#da8300', '#fff'),
    // Mid red background with white text
    tertiary: ThemeColours('#c52f3e', '#fff'),
    // Tailwind default color palette
    slate: colorShades.slate,
    gray: colorShades.gray,
    neutral: colorShades.neutral,
    stone: colorShades.stone,
    red: colorShades.red,
    orange: colorShades.orange,
    amber: colorShades.amber,
    yellow: colorShades.yellow,
    lime: colorShades.lime,
    green: colorShades.green,
    emerald: colorShades.emerald,
    teal: colorShades.teal,
    cyan: colorShades.cyan,
    sky: colorShades.sky,
    blue: colorShades.blue,
    indigo: colorShades.indigo,
    violet: colorShades.violet,
    purple: colorShades.purple,
    fuchsia: colorShades.fuchsia,
    pink: colorShades.pink,
    rose: colorShades.rose,

    // Light grey border with dark grey for hover/focus and off-black text.
    field: ThemeColours('#4b4b4b', '#000'),
    tableHeader: ThemeColours('#a9a7a7', '#fff'),
    // Mid red background with mid red text
    error: ThemeColours('#c52f3e', '#fff'),
    warning: ThemeColours('#ff9800', '#fff'),
    info: ThemeColours('#2196f3', '#fff'),
    success: ThemeColours('#4caf50', '#fff'),
    hint: ThemeColours('#1b1b1b', '#fff'),
    delete: ThemeColours('#c52f3e', '#fff'),
    //You can still define your colours manually if you want to, but you need to define all levels
    //purpleAccent: { lighter: "rgb(198, 51, 255)", c_50: "rgb(198, 51, 255)", c_500: "#b800ff", c_600: "rgb(128, 0, 178)", c_700: "rgb(128, 0, 178)", text: "pink" }, //This is a custom colour
  },
};
(StyleSheet1.breakpoints as any).sm = StyleSheet1.breakpoints[0];
(StyleSheet1.breakpoints as any).md = StyleSheet1.breakpoints[1];
(StyleSheet1.breakpoints as any).lg = StyleSheet1.breakpoints[2];
(StyleSheet1.breakpoints as any).xl = StyleSheet1.breakpoints[3];
