import { Pencil } from "lucide-react";
import { Modal } from "../..";

interface IModalViewUser {
  viewUser: {
    name: string;
    condominium: string;
    apartment: string;
    town: string;
    id: number;
  };
}

const ModalEditUser = ({ viewUser }: IModalViewUser) => {
  return (
    <Modal
      title={viewUser.name}
      iconTrigger={
        <Pencil
          className="cursor-pointer"
          color="#222"
          width={30}
          height={30}
        />
      }
    ></Modal>
  );
};

export default ModalEditUser;
