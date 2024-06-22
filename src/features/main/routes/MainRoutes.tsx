import { RouteObject } from "react-router-dom";
import UsersPage from "../pages/users/page";
import Dashboard from "@/templates/dashboard";
import Messages from "../pages/messages/page";
import Occurrences from "../pages/services/page";
import Find from "../pages/find/page";

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
    path: "/main/messages",
    element: <Messages />,
  },
  {
    path: "/main/services",
    element: <Occurrences />,
  },
  {
    path: "/main/find-by-lost",
    element: <Find />,
  },
];
