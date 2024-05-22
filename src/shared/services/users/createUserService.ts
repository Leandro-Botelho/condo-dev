import api from "@/core/networking/api";
import { IUsersParams } from "../../models/IUser";

export const createUserService = async (params: IUsersParams) => {
  const response = await api.post(`users`, params);
  return response.data;
};
