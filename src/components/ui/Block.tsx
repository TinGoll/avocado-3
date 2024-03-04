import { Theme } from "@emotion/react";
import styled, { Interpolation } from "@emotion/styled";
import { ClassAttributes, FC, HTMLAttributes } from "react";

const Box = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.pelette.background.surface};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const Block: FC<BlockProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export type BlockProps = {} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    css?: Interpolation<Theme>;
  };
