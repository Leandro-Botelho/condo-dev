import AddItem from "@/shared/components/AddItem";
import SmartInput from "@/shared/components/SmartInput";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { IUsersParams } from "@/shared/models/IUser";
import { useCreateUser } from "@/templates/users/hooks/useCreateUser";
import { useHandleSubmitCreateUser } from "@/templates/users/hooks/useHandleSubmitCreateUser";

const ModalCreateUser = () => {
  const { control, handleSubmit } = useHandleSubmitCreateUser();
  const createUser = useCreateUser();

  const onSubmit = (data: IUsersParams) => {
    const dateToday = new Date().toISOString();
    createUser({
      ...data,
      created_at: dateToday,
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <AddItem />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#f6f6f5] pt-12 px-6">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <SmartInput control={control} label="Nome Completo" name="name" />
          <SmartInput control={control} label="E-mail" name="email" />
          <SmartInput control={control} label="Condomínio" name="condominium" />
          <SmartInput control={control} label="Apartamento" name="apartment" />
          <div className="flex gap-4 ">
            <SmartInput
              style={{ flex: 1 }}
              control={control}
              label="Cidade"
              name="town"
            />
          </div>
          <SmartInput
            control={control}
            label="Número de contato"
            name="contact"
            mask="99 99999-9999"
          />

          <button
            type="submit"
            className="bg-primaryBg px-4 py-2 rounded-lg text-white"
          >
            Criar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCreateUser;
