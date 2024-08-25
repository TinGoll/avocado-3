import { FC } from "react";

import styled from "@emotion/styled";
import { CustomerOrderPicker } from "../entities/customer-order-picker";

const OverriddenStyles = styled.div`
  color: ${({ theme }) => theme.pelette.lime.main};
  font-size: 16px;
`;

export const OrdersPage: FC = () => {
  return (
    <>
      <div>Тут будет таблица с заказами.</div>
      <OverriddenStyles>
        <CustomerOrderPicker width={'20vw'} />
      </OverriddenStyles>
    </>
  );
};
