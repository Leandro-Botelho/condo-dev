import SideBar from "@/core/components/SideBar";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { Outlet } from "react-router-dom";

const Main = () => {
  useUnLoggedUser();
  return (
    <div className="flex h-screen w-screen gap-2">
      <SideBar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
