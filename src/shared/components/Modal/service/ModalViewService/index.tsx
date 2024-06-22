import { Modal } from "../..";
import Button from "@/shared/components/Button";
import { Eye } from "lucide-react";

interface IModalViewService {
  dataViewMessage: {
    title: string;
    date: string;
    description: string;
    id: number;
    status: boolean;
  };
}

const ModalViewService = ({ dataViewMessage }: IModalViewService) => {
  return (
    <Modal
      title={dataViewMessage.title}
      iconTrigger={
        <Eye
          className="cursor-pointer"
          color="#D0D0D0"
          width={30}
          height={30}
        />
      }
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="bg-white text-black min-h-28 p-3 rounded-lg text-lg">
            {dataViewMessage.description}
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          {dataViewMessage.status ? (
            <p className="border-2 rounded-lg p-3 border-none bg-white text-primary  font-semibold transition">
              serviço concluido
            </p>
          ) : (
            <Button className="border-2 rounded-lg p-3 border-none bg-white text-primary  hover:opacity-80  font-semibold transition">
              Finalizar mensagem
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalViewService;
