import { Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout, CommonLayout } from "./layouts";
import { HomePage, LoginPage } from "./pages";
import { UiBook } from "./pages/UiBook/UiBook";
import { OrderPage } from "./pages/OrderPage/OrderPage";

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
      </Routes>
    </AppLayout>
  );
}

export default App;
