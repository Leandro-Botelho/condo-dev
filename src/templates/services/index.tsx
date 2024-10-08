import { IServiceProps, serviceMock } from "@/mock/services";
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
import { IServiceUserResponse } from "@/shared/models/IService";
import { useState } from "react";

interface IServicePropss {
  serviceUser: IServiceUserResponse[];
}

const ServicesTemplate = ({ serviceUser }: IServicePropss) => {
  const [openDetailsService, setOpenDetailsService] = useState(false);

  // const [client, setClient] = useState<IUsersParams | null>(null);
  const [service, setService] = useState<IServiceProps | null>(null);

  const serviceDetails = (message: IServiceProps) => {
    setService(message);
    setOpenDetailsService(true);
  };
  return (
    <>
      <Container label="Serviços">
        <Table className="border-2 w-[550px]">
          <TableHeader>
            <TableRow className="text-xl">
              <TableHead>Aviso</TableHead>
              <TableHead>Criado</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {serviceMock.map((dataMessage, index) => (
              <TableRow
                key={index}
                onClick={() => serviceDetails(dataMessage)}
                className="cursor-pointer"
              >
                <TableCell>{dataMessage.title}</TableCell>
                <TableCell>{dataMessage.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>

      {/* <ModalCreateService /> */}
      {service && (
        <ModalViewService
          dataViewService={service}
          openModal={openDetailsService}
          onOpenChange={() => setOpenDetailsService(false)}
        />
      )}
    </>
  );
};

export default ServicesTemplate;
