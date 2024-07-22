import { findMock } from "@/mock/findAndLost";
import CardFind from "./components/Card";
import Container from "@/shared/components/Container";

const FindTemplate = () => {
  return (
    <Container label="Achados e perdidos">
      <div className="flex gap-8 flex-wrap">
        {findMock.map((itemsFind) => (
          <CardFind key={itemsFind.id} itemsFind={itemsFind} />
        ))}
      </div>
    </Container>
  );
};

export default FindTemplate;
