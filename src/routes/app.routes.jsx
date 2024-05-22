import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRoutes = createBrowserRouter([
  {path: "/", element: <Home />, errorElement: <ErrorPage />},
  {path: "*", element: <PageNotFound />, errorElement: <ErrorPage />},
]);