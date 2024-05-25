import styled from "@emotion/styled";
import { Button } from "antd";

export const SuppliersHeader = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.pelette.divider};
  background-color: ${({ theme }) => theme.pelette.background.surface};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const SuppliersAddButton = styled(Button)`
  background: ${({ theme }) => theme.pelette.secondary.main};
  :where(.css-dev-only-do-not-override-1ccbbdj).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #fff;
    background: ${({ theme }) => theme.pelette.secondary.light};
  }

  :where(.css-dev-only-do-not-override-1y68hd6).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #fff;
    background: ${({ theme }) => theme.pelette.secondary.light};
  }

  :where(.css-dev-only-do-not-override-1ccbbdj).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):active {
    color: #fff;
    background: ${({ theme }) => theme.pelette.secondary.dark};
  }

  :where(.css-dev-only-do-not-override-1y68hd6).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):active {
    color: #fff;
    background: ${({ theme }) => theme.pelette.secondary.dark};
  }
`;
