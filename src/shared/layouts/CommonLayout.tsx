import styled from "@emotion/styled";
import { ReactFCWithChildren } from "@/shared/types/app.types";

const Root = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: var(--header-height) 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";

  --header-height: 46px;
  --content-height: calc(100vh - var(--header-height));
  
  --body-gap: 16px;
  --body-padding: 16px;
`;

const Header = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-border);
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: var(--header-height);
  max-width: 320px;
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
`;

const Content = styled.main`
  grid-area: content;
  height: var(--content-height);
  overflow: hidden;
  box-sizing: border-box;
`;

interface Composition {
  Header: typeof Header;
  Sidebar: typeof Sidebar;
  Content: typeof Content;
}

export const CommonLayout: ReactFCWithChildren & Composition = ({
  children,
}) => <Root>{children}</Root>;

CommonLayout.Header = Header;
CommonLayout.Sidebar = Sidebar;
CommonLayout.Content = Content;
