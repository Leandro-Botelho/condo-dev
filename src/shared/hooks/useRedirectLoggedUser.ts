import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectLoggedUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/main");
    }
  }, [navigate]);
};
