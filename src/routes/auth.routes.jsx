import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { ErrorPage } from "../pages/ErrorPage";
import { PageNotFound } from "../pages/PageNotFound";

export const AuthRoutes = createBrowserRouter([
  {path: "/", element: <SignIn />, errorElement: <ErrorPage />},
  {path: "/register", element: <SignUp />, errorElement: <ErrorPage />},
  {path: "*", element: <PageNotFound />, errorElement: <ErrorPage />},
]);