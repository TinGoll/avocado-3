import styled from "@emotion/styled";
import { Button } from "antd";
import { FC } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  & button {
    border-radius: 2px;
    background-color: ${({ theme }) => theme.pelette.background.body};
    color: ${({theme}) => theme.pelette.text.icon};
    font-weight: 500;
  }
`;
/**
 * Кнопки, для управления заказом.
 */
export const OrderActions: FC = () => {
  return (
    <Container>
      <Button size="small" type="text">
        Lorem, ipsum.
      </Button>
      <Button size="small" type="text">
        Lorem, ipsum.
      </Button>
      <Button size="small" type="text">
        Lorem, ipsum.
      </Button>
    </Container>
  );
};
