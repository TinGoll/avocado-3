import { Theme } from "@emotion/react";
import styled, { Interpolation } from "@emotion/styled";
import { ClassAttributes, FC, HTMLAttributes } from "react";

type BoxProps = {
  shadow: number;
};
const Box = styled("div")<BoxProps>`
  padding: 8px;
  background-color: ${({ theme }) => theme.pelette.background.surface};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  box-shadow: ${({ theme, shadow }) => theme.shadows[shadow]};
`;

export const Block: FC<BlockProps> = ({ children, shadow = 1, ...props }) => {
  return (
    <Box shadow={shadow} {...props}>
      {children}
    </Box>
  );
};

export type BlockProps = {
  shadow?: number;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    css?: Interpolation<Theme>;
  };
