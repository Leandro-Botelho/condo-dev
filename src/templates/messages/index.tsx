import { IMessageProps, messageMock } from "@/mock/messages";
import Container from "@/shared/components/Container";
import ModalCreateMessage from "@/shared/components/Modal/Message/ModalCreateMessage";
import ModalViewMessage from "@/shared/components/Modal/Message/ModalViewMessage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import { useState } from "react";

const MessageTemplate = () => {
  useUnLoggedUser();

  const [openDetailsMessage, setOpenDetailsMessage] = useState(false);

  // const [client, setClient] = useState<IUsersParams | null>(null);
  const [message, setMessage] = useState<IMessageProps | null>(null);

  const messageDetails = (message: IMessageProps) => {
    setMessage(message);
    setOpenDetailsMessage(true);
  };
  return (
    <>
      <Container label="Avisos">
        <main className="flex gap-8">
          <div className="bg-hoverBg h-[200px] w-[550px] rounded-lg flex items-center justify-center px-2">
            <p className="text-white font-semibold text-xl text-center">
              Você não tem eventos para hoje!
            </p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mensagem</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {messageMock.map((dataMessage, index) => (
                <TableRow
                  key={index}
                  onClick={() => messageDetails(dataMessage)}
                  className="cursor-pointer"
                >
                  <TableCell>{dataMessage.title}</TableCell>
                  <TableCell>{dataMessage.id}</TableCell>
                  <TableCell>{dataMessage.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </Container>
      <ModalCreateMessage />
      {message && (
        <ModalViewMessage
          dataViewMessage={message}
          openModal={openDetailsMessage}
          onOpenChange={() => setOpenDetailsMessage(false)}
        />
      )}
    </>
  );
};

export default MessageTemplate;
