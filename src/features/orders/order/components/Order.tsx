import { FC } from "react";
import { OrderContainer as Container } from "./OrderContainer";
import { useOrderMode } from "../hooks";
import { OrderCanvas } from "./order-cansas";

export const Order: FC = () => {
  const mode = useOrderMode();
  return (
    <Container>
      <div className="order-data">
        <OrderCanvas />
      </div>
      <div className="order-sidebar">{mode}</div>
    </Container>
  );
};
