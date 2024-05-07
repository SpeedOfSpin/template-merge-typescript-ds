import { StyleSheet1 } from './StyleSheet1';

export let theme = StyleSheet1;

export const setTheme = (newTheme: any) => {
  theme = { ...theme, ...newTheme };
};
//export const palette = theme.palette;
