import { Block } from "@/shared/ui";
import styled from "@emotion/styled";

export const OrderCanvasContainer = styled(Block)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & .sticky-header {
    position: sticky;
    top: 0;
    left: 0;
    padding: 4px 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.pelette.background.surface};
  }
`;
