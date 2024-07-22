import { API } from "@/core/networking/api";

export const deleteUserService = async (id: number) => {
  const response = await API.delete(`users/${id}`);

  return response.data;
};
