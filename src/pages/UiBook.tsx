import { ModeButton, ModeSwitch } from "@/entities/theme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const TestBlock = styled.div<{ color: Avocado.Color }>`
  background-color: ${({ theme, color }) => theme.pelette[color].main};
  color: ${({ theme, color }) => theme.pelette[color].contrastText};
  padding: 16px;
  font-weight: 500;
`;

export const UiBook = () => {
  return (
    <div
      css={(theme) => ({
        padding: 16,
        backgroundColor: theme.pelette.background.surface,
      })}
    >
      <div css={{ display: "flex", flexDirection: "row", gap: 16 }}>
        <ModeButton size="small" />
        <ModeSwitch />
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <TestBlock color="primary">primary</TestBlock>
        <TestBlock color="secondary">secondary</TestBlock>
        <TestBlock color="success">success</TestBlock>
        <TestBlock color="neutral">neutral</TestBlock>
        <TestBlock color="warning">warning</TestBlock>
        <TestBlock color="error">error</TestBlock>
        <TestBlock color="yellow">yellow</TestBlock>
        <TestBlock color="brown">brown</TestBlock>
        <TestBlock color="lime">lime</TestBlock>
      </div>
    </div>
  );
};
