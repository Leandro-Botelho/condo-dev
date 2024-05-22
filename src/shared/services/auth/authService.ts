import { API } from "@/core/networking/api";

export interface IUserAdmin {
  id: number;
  name: string;
  email: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUserAdmin;
  access_token: string;
}

export const authService = async (
  params: ILoginParams
): Promise<ILoginResponse> => {
  const response = await API.post("login", params);

  return response.data;
};
