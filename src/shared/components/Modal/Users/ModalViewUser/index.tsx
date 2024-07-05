import ViewDetails from "@/shared/components/ViewDetail";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/components/ui/dialog";

interface IModalViewUser {
  viewUser: {
    name: string;
    condominium: string;
    apartment: string;
    town: string;
    id: number;
  };
  openModal: boolean;
  onOpenChange: () => void;
}

const ModalViewUser = ({
  viewUser,
  openModal,
  onOpenChange,
}: IModalViewUser) => {
  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-5">
            <ViewDetails title="Nome do Cliente" text={viewUser.name} />
            <ViewDetails title="Email" text={viewUser.name} />
            <ViewDetails title="Condomínio" text={viewUser.condominium} />
            <ViewDetails title="Apartamento" text={viewUser.apartment} />
            <ViewDetails title="Cidade" text={viewUser.town} />
            <ViewDetails title="Contato" text={viewUser.town} />
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button className="bg-primaryBg px-4 py-2 rounded-lg outline-none text-white">
              Fechar
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalViewUser;
