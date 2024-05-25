import { Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout, CommonLayout } from "./layouts";
import { HomePage, LoginPage } from "./pages";
import { UiBook } from "./pages/UiBook/UiBook";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { CubicLayout } from "./layouts/CubicLayout/CubicLayout";
import { CubicHome, PricePage, SuppliersPage } from "./pages/Cubic";
import { CubicPage } from "./features/cubic/CubicMenu";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route path="/" element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/orders/:orderId/*" element={<OrderPage />} />
          <Route path="/ui-book" element={<UiBook />} />
          <Route path="*" element={<HomePage />} />
        </Route>

        <Route path="cubic" element={<CubicLayout />}>
          <Route index element={<CubicHome />} />
          <Route path={CubicPage.SUPPLIERS} element={<SuppliersPage />} />
          <Route path={CubicPage.PRICE} element={<UiBook />} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
