import React, { useState } from "react";
import {
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import styled from "@emotion/styled";
import {
  CubicPage,
  setCubicPage,
  toggleCubicMenuCollapsed,
  useCubicMenuCollapsed,
  useCurrentCubicPage,
} from ".";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const StyledMenu = styled(Menu)`
  border-inline-end: none;
  :where(.css-dev-only-do-not-override-1ccbbdj).ant-menu {
    transition: none;
  }
  :where(
      .css-dev-only-do-not-override-1ccbbdj
    ).ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end: none;
  }
  :where(
      .css-dev-only-do-not-override-1ccbbdj
    ).ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: none;
  }
  :where(.css-dev-only-do-not-override-1ccbbdj).ant-menu-light
    .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.pelette.background.body};
  }

  :where(.css-dev-only-do-not-override-1ccbbdj).ant-menu-light
    .ant-menu-item-selected {
  }
`;

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.pelette.background.surface};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ToogleButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  border-radius: 0;
  border-top: 1px solid ${({ theme }) => theme.pelette.divider};
`;
const items: MenuItem[] = [
  getItem("Поставщики леса", CubicPage.SUPPLIERS, <UsergroupAddOutlined />),
  getItem("Прайс на лес", CubicPage.PRICE, <FormOutlined />),
];

export const CubicMenu: React.FC = () => {
  const page = useCurrentCubicPage();
  const isCollapsed = useCubicMenuCollapsed();

  return (
    <Container>
      <StyledMenu
        selectedKeys={[page]}
        mode="inline"
        items={items}
        inlineCollapsed={isCollapsed}
        onSelect={(info) => setCubicPage(info.key as CubicPage)}
      />
      <ToogleButton onClick={toggleCubicMenuCollapsed}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </ToogleButton>
    </Container>
  );
};
