import { FC } from "react";
import styled from "@emotion/styled";
import { CustomerOrderPicker } from "../entities/customer-order-picker";
import { SummaryOfOrders } from "../features/summary-of-orders";

const OverriddenStyles = styled.div`
  color: ${({ theme }) => theme.pelette.lime.main};
  font-size: 16px;
`;

export const OrdersPage: FC = () => {
  return (
    <>
      <SummaryOfOrders />
    </>
  );
};
