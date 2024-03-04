import { FireOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { FC } from "react";

import { OrderHeaderBreadcrumb } from "./OrderHeaderBreadcrumb";
import { useTheme } from "@emotion/react";
import { useMode } from "@/theme";
import { Block } from "@/components/ui";
import { css } from "@emotion/css";
import { OrderActions } from "./OrderActions";
import { OrderHeaderTitle } from "./OrderHeaderTitle";

const blockClass = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const contentClass = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--body-gap);
`;

export const OrderHeader: FC<Props> = ({ orderId, orderTitle }) => {
  const theme = useTheme();
  const mode = useMode();
  return (
    <Block className={blockClass}>
      <div className={contentClass}>
        <Avatar
          shape="square"
          size={46}
          icon={<FireOutlined />}
          css={{
            color: theme.pelette.error[mode === "dark" ? 400 : 500],
            backgroundColor: theme.pelette.error[mode === "dark" ? 800 : 50],
          }}
        />
        <div>
          <OrderHeaderBreadcrumb orderNumber={orderId} />
          <OrderHeaderTitle>{orderTitle}</OrderHeaderTitle>
        </div>
      </div>
      <div className={contentClass}>
        <OrderActions />
      </div>
    </Block>
  );
};

type Props = {
  orderId: number;
  orderTitle: string;
};
