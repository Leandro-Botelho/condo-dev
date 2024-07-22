import { API } from "@/core/networking/api";
import { IServiceUserResponse } from "@/shared/models/IService";

export const getServiceUsersService = async (): Promise<
  IServiceUserResponse[]
> => {
  const response = await API.get(`service-user`);

  return response.data;
};
