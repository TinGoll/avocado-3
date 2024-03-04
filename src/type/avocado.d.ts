const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const typography = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "overline",
  "inherit",
] as const;

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


  type CssProps = React.CSSProperties;
  type TypographyProps = CssProps;
  type TypographyKey = (typeof typography)[number];
  type Typography = {
    [key in TypographyKey]: TypographyProps;
  };

  interface Theme {
    pelette: ThemePelette;
    shape: Shape;
    shadows: Record<number, string>;
    typography: Typography;
  }

  type Mode = "light" | "dark";
}
