import { Interpolation, Theme, useTheme } from "@emotion/react";
import { FC, ComponentProps, ElementType } from "react";

type TypographyPropsMap = {
  [key in Avocado.TypographyKey]: ElementType;
};
const typographyPropsMap: TypographyPropsMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  inherit: "span",
};

type TypographyProps = {
  type: Avocado.TypographyKey;
  color?: Avocado.Color;
  css?: Interpolation<Theme>;
} & React.PropsWithChildren &
  ComponentProps<"p">;

export function Typography({ type, color, css, ...props }: TypographyProps) {
  const TypographyTag = typographyPropsMap[type] || "p";
  const theme = useTheme();
  const textColor = color ? { color: theme.pelette[color].main } : {};
  return (
    <TypographyTag
      css={[
        { ...theme.typography[type], ...textColor },
        ...(Array.isArray(css) ? css : [css]),
      ]}
      {...props}
    />
  );
}
