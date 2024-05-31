import { CollapsedBlock } from '@/components/ui';
import styled from '@emotion/styled';
import { FC } from 'react'
import { OrderCustomerDetailsHeader } from '../order-сustomer-details/OrderCustomerDetailsHeader';
import { CustomerField, OrderNameField, PriceField, RegistrationDateField, IssueDateField, UrgencyField } from '../order-сustomer-details/fields';


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

export const OrderDocumentDetails: FC = () => {
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
  )
}
