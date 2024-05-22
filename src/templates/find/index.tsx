

import { findMock } from "@/mock/findAndLost";
import Breadcrumb from "@/shared/components/Breadcrumb";
import H1 from "@/shared/components/H1";
import CardFind from "./components/Card";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";

const FindTemplate = () => {
  useUnLoggedUser();
  return (
    <main className="flex flex-col gap-8 relative h-full">
      <Breadcrumb label="Achei" />

      <H1>Achados e perdidos</H1>

      <div className="flex gap-12 flex-wrap">
        {findMock.map((itemsFind) => (
          <CardFind key={itemsFind.id} itemsFind={itemsFind} />
        ))}
      </div>
    </main>
  );
};

export default FindTemplate;
