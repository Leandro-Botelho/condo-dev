import { Modal } from "@/shared/components/Modal";
import ModalViewFindItem from "@/shared/components/Modal/Find";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";

interface IFindProps {
  itemsFind: {
    title: string;
    location: string;
    nameFind: string;
    id: number;
    contact: string;
    description: string;
  };
}

const CardFind = ({ itemsFind }: IFindProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-border shadow-lg rounded-lg w-[300px] cursor-pointer">
          <h1 className="text-center p-2 w-full rounded-t-lg bg-primaryBg text-white font-semibold text-xl">
            {itemsFind.title}
          </h1>

          <div className="p-3 ">
            <ul className="flex flex-col gap-2">
              <li className="text-primary">
                <strong className="text-primary">Condomínio:</strong>{" "}
                {itemsFind.location}
              </li>
              <li className="text-primary">
                <strong className="text-primary">Achou:</strong>{" "}
                {itemsFind.nameFind}
              </li>
              <li className="text-primary">
                <strong className="text-primary">Contato: </strong>
                {itemsFind.contact}{" "}
              </li>
            </ul>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <ModalViewFindItem itemsFind={itemsFind} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CardFind;
