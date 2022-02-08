import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    accentColor: string;
    fontColor: string;
    placeholderColor: string;
    borderColor: string;
    inputColor: string;
    backgroundColor: string;
    linkColor: string;
    infoColor: string;
    errorColor: string;
  }
}
