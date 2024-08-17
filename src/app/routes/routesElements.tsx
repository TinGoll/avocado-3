import { AuthLayout } from "@/shared/layouts";
import { LoginPage, NotFoundPage, UiBook } from "@/pages";
import { Route, Routes } from "react-router-dom";
import { AuthenticationGuard } from "./authentication-guard";
import { PageWrapper } from "./page-wrapper";
import { OrderPage, OrdersPage } from "@/avocado-app/pages";
import { ROUTES } from "./routes";

export const routesElements = (): JSX.Element => (
  <Routes>
    <Route path={ROUTES.login} element={<AuthLayout />}>
      <Route index element={<LoginPage />} />
    </Route>
    <Route
      path={ROUTES.root}
      element={
        <PageWrapper>
          <AuthenticationGuard />
        </PageWrapper>
      }
    >
      <Route index element={<OrdersPage />} />
      <Route path={ROUTES.orderId} element={<OrderPage />} />
      <Route path={ROUTES.uiBook} element={<UiBook />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
