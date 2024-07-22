import { Axios } from "axios";
import { CreateUserSchema } from "./useHandleSubmitCreateUser";
import { useRootFullScreenLoader } from "@/shared/hooks/useRootFullScreenLoader";
import { createUserService } from "@/shared/services/users/createUserService";

export const useCreateUser = () => {
  const loadScreen = useRootFullScreenLoader();

  const createUser = async (params: CreateUserSchema) => {
    loadScreen.show();

    try {
      await createUserService(params);
      window.location.reload();
    } catch (error) {
      if (error instanceof Axios) {
        console.error(error);
      }
    } finally {
      loadScreen.hide();
    }
  };

  return createUser;
};
