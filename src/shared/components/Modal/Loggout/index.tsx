import { useAuthStore } from "@/shared/store/useAuthStore";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { useNavigate } from "react-router-dom";

interface IModalLoggout {
  openModal: boolean;
  onOpenChange: () => void;
}

const ModalLoggout = ({ onOpenChange, openModal }: IModalLoggout) => {
  const loggout = useAuthStore((state) => state.loggout);
  const navigate = useNavigate();

  const handleLoggout = () => {
    loggout();
    navigate("/login");
  };

  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl font-semibold text-black text-center mb-4">
            Deseja retornar a tela de login?
          </h2>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={handleLoggout}
            className="w-[165px] border-2 hover:opacity-60 transition-all bg-white text-black px-4 py-2 rounded-lg "
          >
            Sim
          </button>
          <DialogTrigger>
            <button className="w-[165px] bg-primaryBg px-4 py-2 rounded-lg text-white">
              Não
            </button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalLoggout;
