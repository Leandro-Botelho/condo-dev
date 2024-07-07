import { IUsersProps, usersMock } from "@/mock/users";
import Container from "@/shared/components/Container";
import ModalCreateUser from "@/shared/components/Modal/Users/ModalCreateUser";
import ModalViewUser from "@/shared/components/Modal/Users/ModalViewUser";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { getUsers } from "@/shared/services/users/getUserService";
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

  // const [client, setClient] = useState<IUsersParams | null>(null);
  const [client, setClient] = useState<IUsersProps | null>(null);

  const [filterUsers, setFilterUsers] = useState("");

  const clientDetails = (client: IUsersProps) => {
    setClient(client);
    setOpenDetailsClient(true);
  };

  return (
    <>
      <Container label="Usuários">
        <div className="flex gap-3 items-center h-[45px]">
          <input
            onChange={(e) => setFilterUsers(e.target.value)}
            placeholder="Buscar Usuário..."
            type="text"
            className="border-[1px] w-[400px] border-[#D0D0D0]  rounded-lg h-full outline-none px-2 text-lg "
          />

          <div className=" h-full flex items-center justify-center border-[1px] border-[#D0D0D0] w-[45px] rounded-lg cursor-pointer transition-all hover:bg-[#ddd]">
            <Search size={22} color="#222" />
          </div>
        </div>

        <Table className=" border-[1px]">
          <TableHeader>
            <TableRow className="text-xl">
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Início</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersMock?.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => clientDetails(user)}
                className="cursor-pointer text-lg"
              >
                <TableCell>{user.name}</TableCell>

                {/* email */}
                <TableCell>{user.name}</TableCell>

                {/* numero de contato */}
                <TableCell>{user.name}</TableCell>

                <TableCell>21/05/2024</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>

      <ModalCreateUser />

      {client && (
        <ModalViewUser
          onOpenChange={() => setOpenDetailsClient(false)}
          openModal={openDetailsClient}
          viewUser={client}
        />
      )}
    </>
  );
};

export default UsersTemplate;
