import { RouterProvider } from 'react-router-dom';
import {AppRoutes} from "./app.routes";
import {AuthRoutes} from "./auth.routes";

export function Routes(){
  const routes = AppRoutes;

  return(
    <RouterProvider router={routes} />
  );
};
