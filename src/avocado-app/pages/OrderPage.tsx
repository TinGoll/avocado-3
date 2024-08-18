import { FC } from "react";
import { OrderLayout } from "../shared/layouts";
import { OrderCanvas } from "../features/orders/order/components/order-cansas";

export const OrderPage: FC = () => {
  return (
    <OrderLayout>
      <OrderLayout.Content>
        <OrderCanvas />
      </OrderLayout.Content>
      <OrderLayout.Sidebar>
        Lorem, ipsum dolor.
      </OrderLayout.Sidebar>
    </OrderLayout>
  );
};
