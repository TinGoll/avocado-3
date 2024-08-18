import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Menu, MenuProps } from "antd";
import { FC, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const StyledMenu = styled(Menu)`
  &.ant-menu.ant-menu-root.ant-menu-vertical {
    border-inline-end: none;
    border-bottom: 1px solid var(--color-border);
  }
  &.ant-menu-inline-collapsed {
    width: 64px;
  }
`;

const StyledButton = styled(Button)`
  border: none;
  border-bottom: 1px solid var(--color-border);
  &.ant-btn.ant-btn-icon-only {
    width: 100%;
  }
`;

export const SidebarMenu: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <StyledButton
        size="small"
        onClick={() => setCollapsed((prev) => !prev)}
        icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
      />
      <StyledMenu
        inlineCollapsed={collapsed}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};
