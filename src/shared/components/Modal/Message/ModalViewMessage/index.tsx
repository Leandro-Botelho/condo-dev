import { Modal } from "../..";
import Button from "@/shared/components/Button";
import { Eye } from "lucide-react";

interface IModalViewMessage {
  dataViewMessage: {
    title: string;
    date: string;
    description: string;
    id: number;
  };
}

const ModalViewMessage = ({ dataViewMessage }: IModalViewMessage) => {
  return (
    <Modal
      title={dataViewMessage.title}
      iconTrigger={
        <Eye className="cursor-pointer" color="#222" width={30} height={30} />
      }
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-txPrimary">
            Evento para o dia:{" "}
            <span className="font-bold text-txPrimary">
              {dataViewMessage.date}
            </span>
          </p>

          <p className="bg-[#D0D0D0] text-black min-h-28 p-3 rounded-lg text-lg">
            {dataViewMessage.description}
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <Button className="border-2 rounded-lg p-3 border-none bg-white text-primary font-semibold transition">
            Finalizar mensagem
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalViewMessage;
