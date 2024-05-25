import { FC } from "react";
import { OrderHeader } from "./OrderHeader/OrderHeader";
import styled from "@emotion/styled";
import { Typography } from "@/components/typography";

const Block = styled.div`
  padding: var(--body-padding);
`;

export const OrderBlock: FC<Props> = ({ orderId }) => {
  return (
    <Block>
      <OrderHeader orderId={orderId} orderTitle="Lorem, ipsum dolor." />
    </Block>
  );
};
type Props = {
  orderId: number;
};