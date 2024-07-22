import { API } from "@/core/networking/api";
import { IServiceUserParams } from "@/shared/models/IService";

export const createServiceUsersService = async (
  serviceUser: IServiceUserParams,
) => {
  const response = await API.post(`service-user`, serviceUser);

  return response.data;
};
