import { CollapsedBlock } from "@/shared/ui";
import { FC } from "react";
import { OrderCustomerDetailsHeader } from "./OrderCustomerDetailsHeader";
import styled from "@emotion/styled";
import {
  CustomerField,
  IssueDateField,
  OrderNameField,
  PriceField,
  RegistrationDateField,
  UrgencyField,
} from "./fields";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Block = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(140px, auto) 1fr;
  gap: 8px 16px;
  min-width: 320px;
`;

export const OrderCustomerDetails: FC = () => {
  return (
    <CollapsedBlock label={<OrderCustomerDetailsHeader />}>
      <Container>
        <Block>
          <CustomerField />
          <OrderNameField />
          <PriceField />
        </Block>
        <Block>
          <RegistrationDateField />
          <IssueDateField />
          <UrgencyField />
        </Block>
      </Container>
    </CollapsedBlock>
  );
};
