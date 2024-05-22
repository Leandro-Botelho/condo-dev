import { API } from "@/core/networking/api";
import { useRootFullScreenLoader } from "@/shared/hooks/useRootFullScreenLoader";
import {
  ILoginParams,
  ILoginResponse,
  authService,
} from "@/shared/services/auth/authService";
import { useAuthStore } from "@/shared/store/useAuthStore";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const useLoginAuth = () => {
  const navigate = useNavigate();
  const screenLoader = useRootFullScreenLoader();
  const login = useAuthStore((state) => state.login);

  const authUser = async (params: ILoginParams) => {
    screenLoader.showLoader();

    try {
      const { access_token, user }: ILoginResponse = await authService(params);

      API.defaults.headers.Authorization = `Bearer ${access_token}`;

      login(user, access_token);
      API.interceptors.response.use(
        (res) => res,
        (error) => {
          if (error.response.status === 401) {
            navigate("/login");

            toast.error("Necessário fazer login novamente");
          }
          return Promise.reject(error);
        },
      );

      navigate("/main");
    } catch (error) {
      toast.error("Não foi possível logar");
    } finally {
      screenLoader.hideLoader();
    }
  };

  return authUser;
};
