import { useMode } from "@/theme";
import styled from "@emotion/styled";
import { FC } from "react";

type ContainerProps = { mode: Avocado.Mode };
const Container = styled.div<ContainerProps>`
  background: ${({ mode }) =>
    mode === "dark" ? "rgba(254,254,254,0.04)" : "rgba(0,0,0,0.02)"};
  border-radius: 4px;
`;

export const OrderNomenclaturePicker: FC = () => {
  const mode = useMode();
  return <Container mode={mode}>OrderNomenclaturePicker</Container>;
};
