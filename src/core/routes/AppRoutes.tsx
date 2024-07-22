import { RouteObject } from "react-router-dom";
import LoginPage from "@/features/auth/login/page";
import Main from "@/features/main/page";
import { MainRoutes } from "@/features/main/routes/MainRoutes";
import RootPage from "@/features/rootPage";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/main",
    element: <Main />,
    children: MainRoutes,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
