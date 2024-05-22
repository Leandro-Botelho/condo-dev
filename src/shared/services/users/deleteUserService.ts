import api from "@/core/networking/api";
import { AxiosError } from "axios";

export const deleteUserService = async (id: number) => {
  const response = await api.delete(`users/${id}`);

  return response.data;
};
