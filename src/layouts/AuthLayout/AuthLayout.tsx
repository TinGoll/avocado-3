import { useIsAuth } from "@/features/authentication";
import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthLayout: FC = () => {
  const isAuth = useIsAuth();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  if (isAuth) {
    return <Navigate to={fromPage} />;
  }

  return (
    <div>
      <div>AuthLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
