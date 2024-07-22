import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { getUsers } from "@/shared/services/users/getUserService";
import UsersTemplate from "@/templates/users";
import { useQuery } from "@tanstack/react-query";

const UsersPage = () => {
  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUsers,
  });

  if (!users) {
    return null;
  }

  return <UsersTemplate users={users} />;
};

export default UsersPage;
