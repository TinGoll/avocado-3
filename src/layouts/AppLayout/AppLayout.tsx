import { ReactNode, FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme, App as AntApp } from "antd";
import ruRU from "antd/locale/ru_RU";
import styles from "./AppLayout.module.css";

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <AntApp className={styles.app}>
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
