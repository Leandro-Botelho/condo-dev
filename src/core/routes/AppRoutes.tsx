import { RouteObject } from "react-router-dom";
import LoginPage from "@/features/auth/login/page";
import Main from "@/features/main/page";
import { MainRoutes } from "@/features/main/routes/MainRoutes";

export const appRoutes: RouteObject[] = [
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
