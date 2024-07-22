import Card from "./components/Card";
import { messageMock } from "@/mock/messages";
import { serviceMock } from "@/mock/services";
import { findMock } from "@/mock/findAndLost";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { getUsers } from "@/shared/services/users/getUserService";

const Dashboard = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUsers,
  });

  return (
    <div className=" p-12  w-full">
      <div className="flex gap-8 ">
        <Card
          title="Usuários"
          data={
            data?.length
              ? `${data.length} Usuários`
              : "Nenhum usuário cadastrado "
          }
          fill="bg-cardOne"
          route="users"
        />
        <Card
          title="Mensagens"
          data={`${messageMock.length} Mensagens`}
          fill="bg-cardTwo"
          route="messages"
        />
        <Card
          title="Serviços"
          data={`${serviceMock.length} Serviços`}
          fill="bg-cardThree"
          route="services"
        />
        <Card
          title="Achados e perdidos"
          data={`${findMock.length} Itens`}
          fill="bg-cardFour"
          route="find-by-lost"
        />
      </div>
    </div>
  );
};

export default Dashboard;
