const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

declare module Avocado {
  // Тема
  type Color =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "neutral"
    | "yellow"
    | "brown"
    | "lime";

  type ThemePeletteColor = {
    main: string;
    dark: string;
    light: string;
    contrastText: string;
  } & { [key in (typeof numbers)[number]]: string };

  type ThemePelette = Record<Color, ThemePeletteColor> & {
    divider: string;
    background: {
      body: string;
      surface: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      icon: string;
    };
    common: {
      black: string;
      white: string;
    };
  };

  type Shape = {
    borderRadius: number;
  };

  interface Theme {
    pelette: ThemePelette;
    shape: Shape;
  }
}
