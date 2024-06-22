import { API } from "@/core/networking/api";
import { IUserResponse } from "@/shared/models/IUser";

export async function getUsers(): Promise<IUserResponse[]> {
  const response = await API.get(`users`);

  return response.data;
}

export const getUserById = async (id: number) => {
  const response = await API.get(`users/${id}`);

  return response.data;
};
