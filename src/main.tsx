import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./colors.css";
import "antd/dist/reset.css";
import "./reset.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
