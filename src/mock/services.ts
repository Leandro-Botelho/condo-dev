export interface IServiceProps {
  title: string;
  date: string;
  description: string;
  id: number;
  status: boolean;
}

export const serviceMock: IServiceProps[] = [
  {
    id: 1,
    date: "20/12/2024",
    description: "Maçaneta quebrada e porta fazendo barulho",
    title: "Troca de maçaneta",
    status: true,
  },
  {
    id: 2,
    date: "31/12/2024",
    description: "Minha luz da sala está queimada",
    title: "Luz queimada",
    status: false,
  },
];
