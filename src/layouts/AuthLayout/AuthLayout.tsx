import { useIsAuth } from "@/features/authentication";
import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styles from "./AuthLayout.module.css";

export const AuthLayout: FC = () => {
  const isAuth = useIsAuth();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  if (isAuth) {
    return <Navigate to={fromPage} />;
  }

  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};
