import api from "@/core/networking/api";
import { IUsersParams } from "../../models/IUser";

export const updateUserService = async (id: number, params: IUsersParams) => {
  const response = await api.put(`users/${id}`, params);

  return response.data;
};
