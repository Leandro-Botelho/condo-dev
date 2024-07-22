import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authStorage } from "@/features/auth/login/hooks/authLocalStorage";
import { API } from "@/core/networking/api";
import { useAuthStore } from "../store/useAuthStore";

export const useUnLoggedUser = () => {
  const { login, user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = authStorage.get();

    if (userStorage) {
      API.defaults.headers.Authorization = `Bearer ${userStorage.access_token}`;
      login(userStorage.user, userStorage.access_token);
    } else {
      toast.error("Faça login novamente");
      navigate("/login");
    }
  }, [navigate]);

  return !!user;
};
