import styled from "@emotion/styled";
import { Tabs } from "antd";

type Props = { mode: Avocado.Mode };

export const DocumentTabs = styled(Tabs)<Props>`
  & .ant-tabs-nav {
    margin: 0 0 8px 0;
  }
  & .ant-tabs-nav .ant-tabs-tab {
    padding: 2px 8px !important;
  }

  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme, mode }) => mode === "dark" ? theme.pelette.warning.main : theme.pelette.success.main};
    font-weight: 500;
  }

  & .ant-tabs-nav .ant-tabs-tab {
    background: ${({ theme }) => theme.pelette.background.body};
    color: ${({ theme }) => theme.pelette.text.tertiary};
  }

  & .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active {
    background: ${({ theme }) => theme.pelette.background.surface};
  }

  & .ant-tabs-nav .ant-tabs-nav-add {
    min-width: 30px;
    min-height: 30px 
  }
`;