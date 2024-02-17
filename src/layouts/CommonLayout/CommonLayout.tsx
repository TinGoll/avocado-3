import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "./CommonLayout.module.css";

export const CommonLayout: FC = () => {
  const isAuth = false;
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={"login"} state={{ from: location }} />;
  }

  return (
    <div>
      <header className={styles.header}>Headr</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
