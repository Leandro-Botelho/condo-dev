import { RouteObject } from "react-router-dom";
import UsersPage from "../pages/users/page";
import Dashboard from "@/templates/dashboard";

export const MainRoutes: RouteObject[] = [
  {
    path: "/main",
    element: <Dashboard />,
  },
  {
    path: "/main/users",
    element: <UsersPage />,
  },
  {
    path: "/main/message",
  },
  {
    path: "/main/service",
  },
  {
    path: "/main/find-by-lost",
  },
];
