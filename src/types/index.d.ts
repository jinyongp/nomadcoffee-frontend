export type ColorScheme = 'light' | 'dark';
export type Theme = {
  [key in ColorScheme]: DefaultTheme;
};
