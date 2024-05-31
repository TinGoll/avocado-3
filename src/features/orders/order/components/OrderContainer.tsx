import styled from "@emotion/styled";

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(64px, auto);
  grid-template-rows: 1fr;
  height: 100%;
  max-height: 100%;
  & .order-data {
    max-height: 100%;
    height: 100%;
    padding: var(--body-padding);
    padding-right: calc(var(--body-padding) / 2);
  }

  & .order-sidebar {
    max-height: 100%;
    height: 100%;
    padding: var(--body-padding);
    padding-left: calc(var(--body-padding) / 2);
  }
`;
