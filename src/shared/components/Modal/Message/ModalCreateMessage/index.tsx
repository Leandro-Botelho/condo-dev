import AddItem from "@/shared/components/AddItem";
import { DialogTrigger } from "@/shared/components/ui/dialog";
import { Modal } from "../..";
import SmartInput from "@/shared/components/SmartInput";
import Textarea from "@/shared/components/Textarea";
import Button from "@/shared/components/Button";
import { useForm } from "react-hook-form";

const ModalCreateMessage = () => {
  const { control } = useForm();

  return (
    <Modal title="Criar nova mensagem" iconTrigger={<AddItem />}>
      <form className="flex flex-col gap-4 ">
        <SmartInput control={control} name="titleMessage" label="Assunto" />
        <SmartInput control={control} name="localMessage" label="Local" />
        <SmartInput control={control} name="dateMessage" label="Data" />
        <Textarea placeholder="Digite o assunto da mensagem" rows={3} />
      </form>
      <div className="flex justify-end gap-6 mt-4">
        <Button className="bg-primaryBg px-3 py-2 rounded-lg text-white font-semibold hover:opacity-80 hover:bg-white">
          Enviar
        </Button>
        <DialogTrigger>
          <Button className="bg-white text-black border-2 px-3 py-2 rounded-lg">
            Cancelar
          </Button>
        </DialogTrigger>
      </div>
    </Modal>
  );
};

export default ModalCreateMessage;
