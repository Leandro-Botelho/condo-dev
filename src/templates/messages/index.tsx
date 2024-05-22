
import { messageMock } from "@/mock/messages";
import Breadcrumb from "@/shared/components/Breadcrumb";
import H1 from "@/shared/components/H1";
import ModalCreateMessage from "@/shared/components/Modal/Message/ModalCreateMessage";
import ModalViewMessage from "@/shared/components/Modal/Message/ModalViewMessage";
import Table from "@/shared/components/Table";
import TD from "@/shared/components/Table/components/TD";
import TH from "@/shared/components/Table/components/TH";
import TR from "@/shared/components/Table/components/TR";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";

const MessageTemplate = () => {
  useUnLoggedUser();
  return (
    <main className="flex flex-col gap-8 relative h-full">
      <Breadcrumb label="Mensagens" />

      <div className="flex flex-col gap-8">
        <H1>Mensagens</H1>
        <Table>
          <thead>
            <TR>
              <TH title="Título" />
              <TH title="Criado" />
              <TH title="Visualizar" />
            </TR>
          </thead>

          <tbody>
            {messageMock.map((dataMessage, index) => (
              <TR key={index}>
                <TD>{dataMessage.title}</TD>
                <TD>{dataMessage.date}</TD>
                <TD>
                  <ModalViewMessage dataViewMessage={dataMessage} />
                </TD>
              </TR>
            ))}
          </tbody>
        </Table>
      </div>

      <ModalCreateMessage />
    </main>
  );
};

export default MessageTemplate;
