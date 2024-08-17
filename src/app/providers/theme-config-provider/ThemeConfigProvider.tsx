import { ReactFCWithChildren } from "@/shared/types/app.types";
import { ThemeProvider } from "@emotion/react";
import { theme, useMode } from "@/entities/theme";

export const ThemeConfigProvider: ReactFCWithChildren = ({ children }) => {
  const mode = useMode();
  return (
    <div data-theme-mode={mode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};
