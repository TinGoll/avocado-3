import { ReactFCWithChildren } from "@/shared/types/app.types";
import styled from "@emotion/styled";

const Root = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;
const Content = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
`;
const Sidebar = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100%;
  max-width: 420px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 1px solid var(--color-border);
`;

interface Composition {
  Content: typeof Content;
  Sidebar: typeof Sidebar;
}

export const OrderLayout: ReactFCWithChildren & Composition = ({
  children,
}) => {
  return <Root>{children}</Root>;
};

OrderLayout.Content = Content;
OrderLayout.Sidebar = Sidebar;
