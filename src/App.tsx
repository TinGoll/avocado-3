import { Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout, CommonLayout } from "./layouts";
import { HomePage, LoginPage } from "./pages";
import { UiBook } from "./pages/UiBook/UiBook";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/ui-book" element={<UiBook />} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
