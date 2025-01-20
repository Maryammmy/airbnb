import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts";
import ErrorHandler from "../components/errors/ErrorHandler";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages";
import Property from "../pages/Property";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<Home />} />
        <Route path="/properties" element={<Home />} />
        <Route path="/properties/:id" element={<Property />} />
      </Route>
      {/* Page Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
