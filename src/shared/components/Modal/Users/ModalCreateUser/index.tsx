import AddItem from "@/shared/components/AddItem";
import { Modal } from "../..";
import SmartInput from "@/shared/components/SmartInput";
import Button from "@/shared/components/Button";
import { DialogTrigger } from "@/shared/components/ui/dialog";

const ModalCreateUser = () => {
  return (
    <Modal title="Criação de inquilino" iconTrigger={<AddItem />}>
      <form className="flex flex-col gap-7 ">
        <SmartInput label="Nome completo" />
        <SmartInput label="E-mail" />
        <div className="flex gap-2">
          <SmartInput label="Apto" />
          <SmartInput label="Cidade" />
        </div>

        <div className="flex justify-end gap-6 mt-4">
          <Button className="bg-white px-3 py-2 rounded-lg text-primaryBg font-semibold hover:opacity-80 hover:bg-white">
            Criar
          </Button>
          <DialogTrigger>
            <Button className="bg-transparent border-2 px-3 py-2 rounded-lg">
              Cancelar
            </Button>
          </DialogTrigger>
        </div>
      </form>
    </Modal>
  );
};

export default ModalCreateUser;
