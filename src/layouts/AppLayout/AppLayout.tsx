import { ReactNode, FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme, App as AntApp } from "antd";
import ruRU from "antd/locale/ru_RU";
import { css } from "@emotion/css";

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <AntApp
      className={css`
        color: inherit;
      `}
    >
      <ConfigProvider
        locale={ruRU}
        theme={{
          algorithm: [theme.darkAlgorithm],
          token: {
            borderRadius: 4,
            colorBgContainer: "#242424 ",
          },
        }}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </ConfigProvider>
    </AntApp>
  );
};
type Props = {
  children?: ReactNode;
};
