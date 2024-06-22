import Container from "@/shared/components/Container";
import ModalCreateUser from "@/shared/components/Modal/Users/ModalCreateUser";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/components/ui/dialog";
import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { IUsersParams } from "@/shared/models/IUser";
import { getUsers } from "@/shared/services/users/getUserService";
import { handleSliceName } from "@/shared/utils/handleSliceNumber";
import { Dialog } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

const UsersTemplate = () => {
  useUnLoggedUser();
  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUsers,
  });

  const [openDetailsClient, setOpenDetailsClient] = useState(false);
  const [client, setClient] = useState<IUsersParams | null>(null);
  const [filterUsers, setFilterUsers] = useState("");

  const clientDetails = (client: IUsersParams) => {
    setClient(client);
    setOpenDetailsClient(true);
  };

  return (
    <>
      <Container label="Usuários">
        <div className="flex gap-3 items-center h-[45px]">
          <input
            onChange={(e) => setFilterUsers(e.target.value)}
            type="text"
            className="border-[1px] border-[#D0D0D0]  rounded-lg h-full outline-none px-2 text-lg "
          />

          <div className=" h-full flex items-center justify-center border-[1px] border-[#D0D0D0] w-[45px] rounded-lg cursor-pointer transition-all hover:bg-[#ddd]">
            <Search size={22} color="#222" />
          </div>
        </div>

        <main className="flex gap-6 items-center flex-wrap">
          {users &&
            users.map((user) => (
              <div
                onClick={() => clientDetails(user)}
                key={user.id}
                className="flex-1 flex flex-col gap-1 cursor-pointer font-semibold text-lg text-white bg-primaryBg transition-all hover:-translate-y-1 p-3 px-6 rounded-lg shadow-lg"
              >
                <p>{user.name}</p>
                <p className="text-sm">
                  {user.condominium} / {user.town}
                </p>
              </div>
            ))}
        </main>
      </Container>

      <ModalCreateUser />

      <Dialog
        open={openDetailsClient}
        onOpenChange={() => setOpenDetailsClient(false)}
      >
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Nome do cliente</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.name}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Email</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.email}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Condomínio</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.condominium}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Apartamento</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.apartment}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Cidade</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.town}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg ">Número de contato</p>
                <span className="bg-gray-100 p-2 w-full rounded-lg">
                  {client?.contact}
                </span>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button className="bg-primaryBg px-4 py-2 rounded-lg outline-none text-white">
                Fechar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UsersTemplate;
