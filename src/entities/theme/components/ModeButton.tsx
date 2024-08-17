import { Button } from "antd";
import { toggleMode, useMode } from "../model/theme.store";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { FC } from "react";
import { ButtonProps } from "antd/lib";
import { useTheme } from "@emotion/react";

export const ModeButton: FC<ButtonProps> = (props) => {
  const mode = useMode();
  const theme = useTheme();
  return (
    <Button
      css={{
        backgroundColor: theme.pelette.primary.main,
      }}
      icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
      type="primary"
      onClick={toggleMode}
      {...props}
    />
  );
};
