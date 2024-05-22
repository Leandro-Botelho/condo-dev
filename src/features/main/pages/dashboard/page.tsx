import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { getUsers } from "@/shared/services/users/getUserService";
import Dashboard from "@/templates/dashboard";
import { useQuery } from "@tanstack/react-query";

const DashboardPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUsers,
  });

  if (data) {
    return <Dashboard user={data} isLoadind={isLoading} />;
  } else return null;
};

export default DashboardPage;
