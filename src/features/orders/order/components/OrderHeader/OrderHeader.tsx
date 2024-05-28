import {
  AndroidOutlined,
  FireOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar, Button } from "antd";
import { FC } from "react";
import { OrderHeaderBreadcrumb } from "./OrderHeaderBreadcrumb";
import { useTheme } from "@emotion/react";
import { useMode } from "@/theme";
import { OrderActions } from "./OrderActions";
import { Block } from "@/components/ui";

const Container = styled(Block)`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  & .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    gap: 8px;
    & .info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: var(--body-gap);
      flex: 1;

      h1 {
        font-size: 1.3em;
        font-weight: 500;
        margin: 0;
        color: ${({ theme }) => theme.pelette.text.secondary};
        line-height: 20px;
      }
    }
    & .buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      color: ${({ theme }) => theme.pelette.text.icon};
    }
  }
`;

export const OrderHeader: FC<Props> = ({ orderId }) => {
  const theme = useTheme();
  const mode = useMode();
  return (
    <Container shadow={3}>
      <div className="content">
        <div className="info">
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
            <h1> Lorem ipsum dolor sit. </h1>
          </div>
        </div>
        <div className="buttons">
          <Button size="small" icon={<AndroidOutlined />} />
          <Button size="small" icon={<TwitterOutlined />} />
          <Button size="small">button 3</Button>
        </div>
      </div>

      <OrderActions />
    </Container>
  );
};

type Props = {
  orderId: number;
};
