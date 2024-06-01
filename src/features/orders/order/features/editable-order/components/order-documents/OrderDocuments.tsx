import { FC } from "react";
import { Tabs } from "antd";
import styled from "@emotion/styled";
import { useMode } from "@/theme";
import { OrderDocument } from "./OrderDocument";

type StyledCollapseProps = { mode: Avocado.Mode };

const StyledTabs = styled(Tabs)<StyledCollapseProps>`
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
`;

export const OrderDocuments: FC = () => {
  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    console.log(targetKey, action);
  };
  const mode = useMode();
  return (
    <StyledTabs
      mode={mode}
      defaultActiveKey="1"
      type="editable-card"
      onEdit={onEdit}
      items={[
        {
          key: "1",
          label: "Документ 1",
          children: <OrderDocument />,
        },
        {
          key: "2",
          label: "Документ 2",
          children: <OrderDocument />,
        },
      ]}
    />
  );
};
