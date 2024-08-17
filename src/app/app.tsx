import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AntdConfigProvider, ThemeConfigProvider } from "./providers";
import { routesElements } from "./routes";

import "antd/dist/reset.css";
import '@/shared/styles/index.css'
import '@/shared/styles/colors.css'
import '@/shared/styles/reset.css'

export const App: FC = () => {
  return (
    <ThemeConfigProvider>
      <AntdConfigProvider>
        <Router>{routesElements()}</Router>
      </AntdConfigProvider>
    </ThemeConfigProvider>
  );
};
