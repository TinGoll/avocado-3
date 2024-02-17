import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "./CommonLayout.module.css";
import { logout, useIsAuth } from "@/features/authentication";
import { Button } from "antd";

export const CommonLayout: FC = () => {
  const isAuth = useIsAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={"login"} state={{ from: location }} />;
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Button onClick={logout}>Разлогинится</Button> <br />
      </header>
      <div className={styles.sidebar}>sidebar</div>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
