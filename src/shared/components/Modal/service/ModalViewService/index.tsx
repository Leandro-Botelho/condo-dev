import AssuntMessageList from "@/shared/components/AssuntMessageList";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/components/ui/dialog";

interface IModalViewService {
  dataViewService: {
    title: string;
    date: string;
    description: string;
    id: number;
    status: boolean;
  };
  openModal: boolean;
  onOpenChange: () => void;
}

const ModalViewService = ({
  dataViewService,
  openModal,
  onOpenChange,
}: IModalViewService) => {
  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <AssuntMessageList
              assuntMessage="Serviço"
              titleMessage={dataViewService.title}
            />
            <AssuntMessageList
              assuntMessage="Local"
              titleMessage="Local do serviço"
            />
            <AssuntMessageList
              assuntMessage="Data"
              titleMessage={dataViewService.date}
            />
            <AssuntMessageList
              assuntMessage="Descrição	"
              titleMessage={dataViewService.description}
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

export default ModalViewService;
