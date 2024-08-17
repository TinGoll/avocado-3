import { CollapsedBlock } from "@/shared/ui";
import styled from "@emotion/styled";
import { FC } from "react";
import { OrderDocumentDetailsHeader } from "./OrderDocumentDetailsHeader";
import {
  FacadeModelField,
  PanelField,
  MaterialField,
  ColorField,
  PatinaField,
  VarnishField,
  DrillingField,
  ThermalSeamField,
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

export const OrderDocumentDetails: FC = () => {
  return (
    <CollapsedBlock label={<OrderDocumentDetailsHeader />}>
      <Container>
        <Block>
          <FacadeModelField />
          <PanelField />
          <MaterialField />
          <ColorField />
        </Block>
        <Block>
          <PatinaField />
          <VarnishField />
          <DrillingField />
          <ThermalSeamField />
        </Block>
      </Container>
    </CollapsedBlock>
  );
};
