import { create } from "zustand";
import { IUserAdmin } from "../services/auth/authService";
import { authStorage } from "@/features/auth/login/hooks/authLocalStorage";
import { API } from "@/core/networking/api";

interface AuthUseStore {
  user: IUserAdmin | null;
  access_token: string | null;
  login: (user: IUserAdmin, access_token: string) => void;
  loggout: () => void;
}

export const useAuthStore = create<AuthUseStore>()((set) => ({
  user: null,
  access_token: null,
  login: (user, access_token) => {
    API.defaults.headers.Authorization = `Bearer ${access_token}`;
    authStorage.set(user, access_token);
    set({ user, access_token });
  },
  loggout() {
    delete API.defaults.headers.Authorization;
    authStorage.clear();

    set({ user: null, access_token: null });
  },
}));
