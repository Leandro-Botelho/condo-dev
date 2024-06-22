import { API } from "@/core/networking/api";
import { IUserResponse, IUsersParams } from "../../models/IUser";

export const createUserService = async (params: IUsersParams) => {
  const response = await API.post(`users`, params);
  return response.data as IUserResponse;
};
