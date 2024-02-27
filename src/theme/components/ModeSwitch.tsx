import { Switch } from "antd";
import { setMode, useMode } from "../model/theme.store";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const StyledSwitch = styled(Switch)`
  background-color: ${({ theme }) => theme.pelette.primary.main};

  :where(.css-dev-only-do-not-override-1ccbbdj).ant-switch:hover:not(
      .ant-switch-disabled
    ) {
    background-color: ${({ theme }) => theme.pelette.primary.light};
  }

  :where(.css-dev-only-do-not-override-1y68hd6).ant-switch:hover:not(
      .ant-switch-disabled
    ) {
    background-color: ${({ theme }) => theme.pelette.primary.light};
  }
`;

export const ModeSwitch = () => {
  const mode = useMode();
  return (
    <StyledSwitch
      onChange={(checked) => setMode(checked ? "dark" : "light")}
      checked={mode === "dark" ? true : false}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
    />
  );
};
