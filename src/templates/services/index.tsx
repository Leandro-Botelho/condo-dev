import { serviceMock } from "@/mock/services";
import Container from "@/shared/components/Container";
import ModalViewService from "@/shared/components/Modal/service/ModalViewService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
const ServicesTemplate = () => {
  useUnLoggedUser();
  return (
    <Container label="Serviços">
      <Table className="border-2">
        <TableHeader>
          <TableRow>
            <TableHead>Aviso</TableHead>
            <TableHead>Criado</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {serviceMock.map((dataMessage, index) => (
            <TableRow key={index}>
              <TableCell>{dataMessage.title}</TableCell>
              <TableCell>{dataMessage.date}</TableCell>
              <TableCell className="cursor-pointer">
                <ModalViewService dataViewMessage={dataMessage} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ServicesTemplate;
