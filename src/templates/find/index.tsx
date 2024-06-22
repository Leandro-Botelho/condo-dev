import { findMock } from "@/mock/findAndLost";
import CardFind from "./components/Card";
import { useUnLoggedUser } from "@/shared/hooks/useUnLoggedUser";
import Container from "@/shared/components/Container";

const FindTemplate = () => {
  useUnLoggedUser();
  return (
    <Container label="Achados e perdidos">
      <div className="flex gap-12 flex-wrap">
        {findMock.map((itemsFind) => (
          <CardFind key={itemsFind.id} itemsFind={itemsFind} />
        ))}
      </div>
    </Container>
  );
};

export default FindTemplate;
