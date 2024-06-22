import { messageMock } from "@/mock/messages";
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

const MessageTemplate = () => {
  useUnLoggedUser();
  return (
    <>
      <Container label="Avisos">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aviso</TableHead>
              <TableHead>Criado</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {messageMock.map((dataMessage, index) => (
              <TableRow key={index}>
                <TableCell>{dataMessage.title}</TableCell>
                <TableCell>{dataMessage.date}</TableCell>
                <TableCell>
                  <ModalViewMessage dataViewMessage={dataMessage} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <ModalCreateMessage />
    </>
  );
};

export default MessageTemplate;
