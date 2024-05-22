import { IUserAdmin } from "@/shared/services/auth/authService";

const USER_STORAGE = "USER_STORAGE";

interface IAuthenticateLogin {
  user: IUserAdmin;
  access_token: string;
}

export const authStorage = {
  get() {
    const storage = localStorage.getItem(USER_STORAGE);

    if (!storage) return null;

    return JSON.parse(storage) as IAuthenticateLogin;
  },

  set(user: IUserAdmin, access_token: string) {
    try {
      localStorage.setItem(
        USER_STORAGE,
        JSON.stringify({
          user,
          access_token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  },

  clear() {
    const storage = localStorage.removeItem(USER_STORAGE);

    return storage;
  },
};
