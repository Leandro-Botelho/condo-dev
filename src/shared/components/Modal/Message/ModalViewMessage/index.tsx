import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/components/ui/dialog";
import AssuntMessageList from "../../../AssuntMessageList";

interface IModalViewMessage {
  dataViewMessage: {
    title: string;
    date: string;
    description: string;
    id: number;
  };
  openModal: boolean;
  onOpenChange: () => void;
}

const ModalViewMessage = ({
  dataViewMessage,
  onOpenChange,
  openModal,
}: IModalViewMessage) => {
  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <AssuntMessageList
              assuntMessage="Assunto"
              titleMessage={dataViewMessage.title}
            />
            <AssuntMessageList
              assuntMessage="Local"
              titleMessage="Local da mensagem"
            />
            <AssuntMessageList
              assuntMessage="Data"
              titleMessage={dataViewMessage.date}
            />
            <AssuntMessageList
              assuntMessage="Descrição"
              titleMessage={dataViewMessage.description}
            />
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

export default ModalViewMessage;
