import styled from "@emotion/styled";

export const OrderHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 12px;
  & .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    gap: 8px;
    & .info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: var(--body-gap);
      flex: 1;

      & .title {
        font-size: 1.2em;
        font-weight: 500;
        margin: 0;
        color: ${({ theme }) => theme.pelette.text.secondary};
        line-height: 22px;
      }
    }
    & .buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      color: ${({ theme }) => theme.pelette.text.icon};
    }
  }
`;
