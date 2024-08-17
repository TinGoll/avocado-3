import { FC } from "react";
import { OrderDocumentDetails } from "../order-document-details";
import { OrderNomenclaturePicker } from "../order-nomenclature-picker";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OrderDocument: FC = () => {
  return (
    <Container>
      <OrderDocumentDetails />
      <OrderNomenclaturePicker />
    </Container>
  );
};
