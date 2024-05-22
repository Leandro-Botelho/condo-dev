import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../routes/AppRoutes";

const router = createBrowserRouter(appRoutes, {
  basename: "/",
});

const AppRouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouteProvider;
