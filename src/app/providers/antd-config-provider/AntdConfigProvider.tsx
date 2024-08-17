import { ReactFCWithChildren } from "@/shared/types/app.types";
import { useMode } from "@/entities/theme";
import styled from "@emotion/styled";
import { ConfigProvider, theme as antdTheme, App } from "antd";
import ruRU from "antd/locale/ru_RU";

const AntApp = styled(App)`
  width: 100%;
  height: 100vh;
  color: var(--color-text-primary);
  background-color: var(--color-body);
`;

export const AntdConfigProvider: ReactFCWithChildren = ({ children }) => {
  const mode = useMode();
  const algorithm = mode === "dark" ? [antdTheme.darkAlgorithm] : [];

  return (
    <AntApp
      message={{
        maxCount: 5,
        top: 80,
      }}
    >
      <ConfigProvider
        locale={ruRU}
        theme={{
          algorithm: algorithm,
          token: {
            borderRadius: 4,
            colorBgContainer: "var(--color-surface)",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntApp>
  );
};
