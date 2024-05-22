import SideBar from "@/core/components/SideBar";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { Outlet } from "react-router-dom";

const Main = () => {
  useUnLoggedUser();
  return (
    <div className="flex h-screen">
      <SideBar />

      <Outlet />
    </div>
  );
};

export default Main;
