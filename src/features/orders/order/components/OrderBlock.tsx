import { FC } from "react";
import { OrderHeader } from "./OrderHeader/OrderHeader";
import styled from "@emotion/styled";
import { Block } from "@/components/ui";
import { OrderBody } from "./OrderBody/OrderBody";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: var(--body-padding);
  gap: 16px;
`;

export const OrderBlock: FC<Props> = ({ orderId }) => {
  return (
    <Container>
      <OrderHeader orderId={orderId} />
      <OrderBody orderId={orderId} />
    </Container>
  );
};
type Props = {
  orderId: number;
};
