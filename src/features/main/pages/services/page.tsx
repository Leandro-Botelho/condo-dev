import { QUERY_KEYS } from "@/shared/constants/queryKey";
import { getServiceUsersService } from "@/shared/services/serviceUser/getServiceUser";
import ServicesTemplate from "@/templates/services";
import { useQuery } from "@tanstack/react-query";

const Occurrences = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.service],
    queryFn: getServiceUsersService,
  });
  if (!data) return null;

  return <ServicesTemplate serviceUser={data} />;
};

export default Occurrences;
