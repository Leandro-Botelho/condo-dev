import { usersMock } from "@/mock/users";
import Breadcrumb from "@/shared/components/Breadcrumb";
import H1 from "@/shared/components/H1";
import Table from "@/shared/components/Table";
import TD from "@/shared/components/Table/components/TD";
import TH from "@/shared/components/Table/components/TH";
import TR from "@/shared/components/Table/components/TR";
import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { getUsers } from "@/shared/services/users/getUserService";
import { useQuery } from "@tanstack/react-query";

const UsersTemplate = () => {
  useUnLoggedUser();
  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUsers,
  });

  return (
    <div className="flex flex-col gap-8  w-full">
      <Breadcrumb label="Usuários" />
      <H1>Usuários</H1>

      <Table>
        <thead>
          <TR>
            <TH title="Nome" />
            <TH title="E-mail" />
            <TH title="Apto" />
            <TH title="Cidade" />
          </TR>
        </thead>
        <tbody>
          {users &&
            users.map((dataUser, index) => (
              <TR key={index}>
                <TD>{dataUser.name}</TD>
                <TD>{dataUser.condominium}</TD>
                <TD>{dataUser.apartment}</TD>
                <TD>{dataUser.town}</TD>
              </TR>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTemplate;
