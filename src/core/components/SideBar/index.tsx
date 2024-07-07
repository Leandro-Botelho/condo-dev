import { HandPlatter, LockOpen, LogOut, Mail, User } from "lucide-react";
import SideBarItem from "./components/SideBarItem";
import { authStorage } from "@/features/auth/login/hooks/authLocalStorage";
import ModalLoggout from "@/shared/components/Modal/Loggout";
import { useState } from "react";

const SideBar = () => {
  const [openModalLoggout, setOpenModalLoggout] = useState(false);

  const nameUser = authStorage
    .get()
    ?.user.name.split(" ")
    .slice(0, 1)
    .join(" ");

  return (
    <>
      <section className="h-full flex flex-col bg-primary  bg-primaryBg w-[250px]">
        <div className="flex flex-col gap-4 px-6 py-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">DevCond</h1>
          </div>

          <div>
            <p className="text-lg font-semibold text-white ">Olá,</p>
            <span className="font-semibold text-white text-xl">{nameUser}</span>
          </div>
        </div>

        <nav className="flex flex-1 py-8 flex-col justify-between">
          <div className="flex flex-col gap-4">
            <SideBarItem route="/main/users" icon={<User />} label="Usuários" />

            <SideBarItem
              route="/main/messages"
              icon={<Mail />}
              label="Mensagens"
            />
            <SideBarItem
              route="/main/services"
              icon={<HandPlatter />}
              label="Serviços"
            />
            <SideBarItem
              route="/main/find-by-lost"
              icon={<LockOpen />}
              label="Achei"
            />
          </div>

          <button
            onClick={() => setOpenModalLoggout(true)}
            className="mx-6 flex items-center justify-center gap-4 bg-white border-[1px] rounded-xl p-2 text-primaryBg text-lg font-semibold hover:opacity-75 transition-all duration-300"
          >
            <LogOut color="#3481d9" />
            Sair
          </button>
        </nav>
      </section>

      <ModalLoggout
        openModal={openModalLoggout}
        onOpenChange={() => setOpenModalLoggout(false)}
      />
    </>
  );
};

export default SideBar;
