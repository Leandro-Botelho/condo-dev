import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../auth/login/hooks/authLocalStorage";

const RootPage = () => {
  const navigate = useNavigate();
  const user_storage = authStorage.get();

  useEffect(() => {
    if (user_storage) {
      navigate("/main");
    } else navigate("/login");
  }, []);

  return (
    <div className="grid place-items-center h-screen bg-[rgba(0,0,0,.1)]">
      <LoaderCircle color="#3481D9" className="animate-spin" size={100} />
    </div>
  );
};

export default RootPage;
