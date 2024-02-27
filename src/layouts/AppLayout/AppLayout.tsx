import { ReactNode, FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme as antdTheme, App as AntApp } from "antd";
import ruRU from "antd/locale/ru_RU";
import styles from "./AppLayout.module.css";
import { ThemeProvider } from "@emotion/react";
import { theme, useMode } from "@/theme";

export const AppLayout: FC<Props> = ({ children }) => {
  const mode = useMode();
  const algorithm = mode === "dark" ? [antdTheme.darkAlgorithm] : [];
  return (
    <div data-theme-mode={mode}>
      <ThemeProvider theme={theme}>
        <AntApp className={styles.app}>
          <ConfigProvider
            locale={ruRU}
            theme={{
              algorithm: algorithm,
              token: {
                borderRadius: 4,
                colorBgContainer: 'var(--color-surface)',
                // colorBorderSecondary: "var(--border-color)",
              },
            }}
          >
            <BrowserRouter>{children}</BrowserRouter>
          </ConfigProvider>
        </AntApp>
      </ThemeProvider>
    </div>
  );
};
type Props = {
  children?: ReactNode;
};
