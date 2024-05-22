
import { serviceMock } from "@/mock/services";
import Breadcrumb from "@/shared/components/Breadcrumb";
import H1 from "@/shared/components/H1";
import ModalViewService from "@/shared/components/Modal/service/ModalViewService";
import Table from "@/shared/components/Table";
import TD from "@/shared/components/Table/components/TD";
import TH from "@/shared/components/Table/components/TH";
import TR from "@/shared/components/Table/components/TR";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";

const ServicesTemplate = () => {
  useUnLoggedUser();
  return (
    <main className="flex flex-col gap-8 relative h-full">
      <Breadcrumb label="Serviços" />

      <div className="flex flex-col gap-8">
        <H1>Serviços</H1>

        <Table>
          <thead>
            <TR>
              <TH title="Título" />
              <TH title="Criado" />
              <TH title="Status" />
              <TH title="Ver mais" />
            </TR>
          </thead>
          <tbody>
            {serviceMock.map((service) => (
              <TR key={service.id}>
                <TD>{service.title}</TD>
                <TD>{service.date}</TD>
                <TD>
                  {service.status ? (
                    <span className="text-green-600">Finalizado</span>
                  ) : (
                    <span className="text-red-600">Em atendimento</span>
                  )}
                </TD>
                <TD>
                  <ModalViewService dataViewMessage={service} />
                </TD>
              </TR>
            ))}
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default ServicesTemplate;
