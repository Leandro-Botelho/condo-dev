interface IFindProps {
  title: string;
  location: string;
  nameFind: string;
  id: number;
  contact: string;
  description: string;
}

export const findMock: IFindProps[] = [
  {
    id: 1,
    contact: "21 91645-8795",
    description: "Iphone 15 achado na quadra de esportes ",
    location: "Condomínio Teste",
    nameFind: "Leandro Botelho",
    title: "Iphone 15",
  },
  {
    id: 2,
    contact: "61 99855-8456",
    description: "Tenis da Nike que foi deixado na portaria ",
    location: "Condomínio Luz do Sol",
    nameFind: "Usuário Teste",
    title: "Tênis Nike",
  },
];
