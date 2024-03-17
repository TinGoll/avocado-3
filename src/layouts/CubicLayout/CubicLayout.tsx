import { FC, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./CubicLayout.module.css";
import styled from "@emotion/styled";
import { ModeButton } from "@/theme";
import { CubicMenu } from "@/features/cubic/CubicMenu/CubicMenu";
import { useCurrentCubicPage } from "@/features/cubic/CubicMenu";
import { SmileOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 0 16px;
`;

export const CubicLayout: FC = () => {
  const currentPage = useCurrentCubicPage();
  const navigate = useNavigate();
  useEffect(() => navigate(currentPage), [currentPage]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Container>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          ></div>
          <ModeButton size="small" />
        </Container>
      </header>
      <div className={styles.sidebar}>
        <CubicMenu />
      </div>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
