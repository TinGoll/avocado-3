import { useIsAuth } from "@/entities/authentication";
import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthenticationGuard: FC = () => {
  const isAuth = useIsAuth();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"login"} state={{ from: location }} />
  );
};
