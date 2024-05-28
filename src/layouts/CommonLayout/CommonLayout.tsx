import { FC } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "./CommonLayout.module.css";
import { useIsAuth } from "@/features/authentication";
import styled from "@emotion/styled";
import { ModeButton } from "@/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 0 16px;
`;

export const CommonLayout: FC = () => {
  const isAuth = useIsAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={"login"} state={{ from: location }} />;
  }

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
          >
            <Link to="/">Home</Link>
            <Link to="ui-book">Ui Book</Link>
            <Link to="orders/100/edit">order</Link>
          </div>
          <ModeButton size="small" />
        </Container>
      </header>
      <div className={styles.sidebar}>Lorem ipsum dolor sit amet.</div>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
