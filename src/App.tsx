import { Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout, CommonLayout } from "./layouts";
import { HomePage, LoginPage, NotFoundPage, OrderPage } from "./pages";

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
