import {
  AndroidOutlined,
  FireOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { FC } from "react";
import { OrderHeaderBreadcrumb } from "./OrderHeaderBreadcrumb";
import { useTheme } from "@emotion/react";
import { useMode } from "@/theme";
import { OrderHeaderContainer as Container } from "./OrderHeaderContainer";
import { useOrderId, useOrderMode } from "../../hooks";

export const OrderHeader: FC = () => {
  const orderId = useOrderId();
  const orderMode = useOrderMode();
  const theme = useTheme();
  const mode = useMode();
  return (
    <Container>
      <div className="content">
        <div className="info">
          <Avatar
            shape="square"
            size={40}
            icon={<FireOutlined />}
            css={{
              color: theme.pelette.error[mode === "dark" ? 400 : 500],
              backgroundColor: theme.pelette.error[mode === "dark" ? 800 : 50],
            }}
          />
          <div>
            <OrderHeaderBreadcrumb orderNumber={orderId} />
            <h1> Lorem ipsum dolor sit. {orderMode}</h1>
          </div>
        </div>
        <div className="buttons">
          <Button size="small" icon={<AndroidOutlined />} />
          <Button size="small" icon={<TwitterOutlined />} />
          <Button size="small">button 3</Button>
        </div>
      </div>
    </Container>
  );
};
