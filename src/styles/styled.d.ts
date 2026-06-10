import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      border: string;

      primary: string;
      primaryLight: string;

      text: string;
      textSecondary: string;
      textMuted: string;

      success: string;
      danger: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    shadow: {
      primary: string;
    };
  }
}